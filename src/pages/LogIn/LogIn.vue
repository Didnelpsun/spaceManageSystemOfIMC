<template>
  <div class="main cc">
    <div class="loginBoard">
      <el-form :model="log" :rules="Rules" ref="form">
        <el-form-item>
        <el-row>
          <el-col :span="24" class="h">
            <el-form-item prop="account">
              <el-input placeholder="请输入账号" prefix-icon="el-icon-s-custom" v-model="log.account" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="h">
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" prefix-icon="el-icon-s-promotion" v-model="log.password" show-password clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        </el-form-item>
        <el-row>
          <el-col :span="24">
            <el-button type="success" style="width:20vw" class="b" @click="login">登陆</el-button>
          </el-col>
        </el-row>
        <el-row type="flex" justify="end" style="margin-top:10px">
          <el-col class="f" :span="10">
            忘记密码？
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import {login} from '../../api/api'
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'LogIn',
  data () {
    return {
      log: {
        account: '',
        password: ''
      },
      Rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.form.validate(async (valid, mes) => {
        if (!valid) { this.$message.warning('信息缺失') } else {
          this.$axios.post(login, {
            'sid': this.log.account,
            'password': this.log.password
          }).then(res => {
            if (res.token) {
              this.$message.success('登陆成功')
              localStorage.setItem({'Token': res.token})
              this.setToken(res.token)
              console.log(res.token)
              this.$router.push({
                path: '/Main'
              })
            } else {
              this.$message.error('登陆失败，账号有误')
            }
          }).catch(error => {
            this.$message.error('登陆失败' + error)
          })
        }
      })
    },
    ...mapMutations({
      setToken: 'SET_TOKEN'
    })
  },
  created () {
    let token = localStorage.getItem('token')
    if (token) {
      // this.$router.push({
      //   path: '/Main'
      // })
    }
  },
  computed: {
    ...mapGetters(['token'])
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/theme.scss";
  @import url('../../assets/css/flex.css');
  .main{
    background-color: $b;
    width: 100vw;
    height: 100vh;
    font-size: $bfont;
  }
  .loginBoard{
    background-color: rgba($color: $w, $alpha: 0.3);;
    width: 20vw;
    height: 15vw;
    padding: 2 * $pa;
  }
  .h{
    margin-top: $ma;
    margin-bottom: 0.5*$ma;
  }
  .f{
    font-size: $sfont;
    color: $w;
    cursor: pointer;
  }
</style>

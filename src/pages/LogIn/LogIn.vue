<template>
  <div class="main cc">
    <div class="loginBoard">
      <el-form :model="log" :rules="Rules">
        <el-form-item>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="account">
              <el-input placeholder="请输入账号" prefix-icon="el-icon-s-custom" v-model="log.account" class="b" clearable></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item prop="password">
              <el-input placeholder="请输入密码" prefix-icon="el-icon-s-promotion" v-model="log.password" show-password class="b" clearable></el-input>
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
export default {
  name: 'login',
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
      console.log(this.log)
    }
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
  .b{
    margin-top: $ma;
    margin-bottom: $ma;
  }
  .f{
    font-size: $sfont;
    color: $w;
    cursor: pointer;
  }
</style>

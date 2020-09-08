<template>
  <div class="main">
    <el-scrollbar>
    <el-form :v-model="tableData" class="form">
      <el-form-item>
        <el-upload
          class="avatar-uploader"
          action="#"
          :multiple="false"
          :auto-upload="false"
          accept="image/jpeg,image/jpg,image/png"
          :on-change="uploadImg"
          list-type="picture-card"
          :show-file-list="false">
          <div v-if="tableData.avatar" style="positon:relative">
            <img :src="tableData.avatar" class="aimg">
            <i class="el-icon-circle-close" style="position:absolute;z-index:5;bottom:0" @click.stop="tableData.avatar = initAvatar"/>
          </div>
          <i v-else-if="!tableData.avatar" class="el-icon-user-solid"></i>
        </el-upload>
        <span>用户头像</span>
      </el-form-item>
      <el-form-item label="用户ID">
        <el-input v-model="tableData.sid" readonly disabled suffix-icon="el-icon-info"></el-input>
      </el-form-item>
      <el-form-item label="用户名">
        <el-input v-model="tableData.username" clearable  suffix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model="tableData.phone" clearable  suffix-icon="el-icon-phone"></el-input>
      </el-form-item>
      <el-form-item label="是否是老师">
        <el-select v-model="tableData.is_teacher" style="width:100%" disabled>
          <el-option key="true" label="是" :value="true">
          </el-option>
          <el-option key="false" label="否" :value="false">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-upload
          action="#"
          :multiple="false"
          :auto-upload="false"
          accept="image/jpeg,image/jpg,image/png"
          :on-change="uploadImg"
          list-type="picture-card"
          :show-file-list="false">
          <div v-if="tableData.avatar" style="positon:relative">
            <img :src="tableData.avatar" class="aimg">
            <i class="el-icon-circle-close" style="position:absolute;z-index:5;bottom:0" @click.stop="tableData.avatar = initAvatar"/>
          </div>
          <i v-else-if="!tableData.avatar" class="el-icon-user-solid"></i>
        </el-upload>
        <span>用户背景</span>
      </el-form-item>
    </el-form>
    </el-scrollbar>
  </div>
</template>

<script>
import {userInfo} from '@/api/api'
export default {
  name: 'Course',
  data () {
    return {
      tableData: {
        username: '',
        avatar: '',
        introduction: '',
        phone: '',
        back_avatar: '',
        is_teacher: true,
        sid: ''
      },
      initAvatar: null,
      initBackAvatar: null
    }
  },
  methods: {
    getInfo () {
      this.$axios.get(userInfo).then(res => {
        if (res.data) {
          this.tableData = res.data
          this.initAvatar = this.tableData.avatar
          this.initBackAvatar = this.tableData.back_avatar
        } else {
          this.$message.error('用户信息获取错误：' + res.message)
        }
      }).catch(error => {
        this.$message.error('用户信息获取错误：' + error)
      })
    },
    uploadImg (file, fileList) {
      this.tableData.avatar = file.url
      fileList = fileList.pop()
    }
  },
  activated () {
    this.getInfo()
  }
}
</script>

<style scoped lang="scss">
  @import url('../../assets/css/main.css');
  @import "../../assets/sass/theme.scss";
  .form{
    width:50vw;
    border:1px solid white;
    padding: $ma;
    background-color: $bor;
  }
  .aimg{
    width:100%;
    height: 100%;
  }
</style>

<template>
  <div class="main">
    <div style="width:80vw">
      <el-row class="b" style="margin-top:30px">
        <el-col>
          <el-input
          type="textarea"
          :autosize="{ minRows: 6, maxRows: 6}"
          placeholder="请输入心理站平台介绍"
          v-model="form.platform">
          </el-input>
        </el-col>
      </el-row>
      <el-row class="b">
        <el-col :span="8" :push="2">
          <el-upload action="#" :auto-upload="false" list-type="picture-card" :limit="1" :on-exceed="onExceed" :file-list="homeList" :on-change="upHome" :show-file-list="false">
            <i slot="default" class="el-icon-plus"></i>
            <div class="el-upload__tip" slot="tip">首页海报</div>
          </el-upload>
        </el-col>
        <el-col :span="4">
          <img :src="form.home" style="width:100px;height:100px"/>
          <el-button type="danger" icon="el-icon-delete" circle style="margin-left:15px;" @click="deletePhoto(0)"></el-button>
        </el-col>
        <el-col :span="8" :push="2">
          <el-upload action="#" :auto-upload="false" list-type="picture-card" :limit="1" :on-exceed="onExceed" :file-list="holeList" :on-change="upHole" :show-file-list="false">
            <i slot="default" class="el-icon-plus"></i>
            <div class="el-upload__tip" slot="tip">树洞海报</div>
          </el-upload>
        </el-col>
        <el-col :span="4">
          <img :src="form.hole" style="width:100px;height:100px"/>
          <el-button type="danger" icon="el-icon-delete" circle style="margin-left:15px;" @click="deletePhoto(1)"></el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-button type="success" @click="setPoster">更新海报数据</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import {poster} from '@/api/api'
export default {
  data () {
    return {
      form: {
        home: '',
        platform: '',
        hole: ''
      },
      homeList: [],
      holeList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    getPoster () {
      this.$axios.get(poster).then(res => {
        if (res.data) {
          this.form.home = res.data.home
          this.form.platform = res.data.platform
          this.form.hole = res.data.hole
        }
      }).catch(error => {
        this.$message.error('获取海报错误：' + error)
      })
    },
    onExceed () {
      this.$message.warning('只能上传一张图片')
    },
    upHome (file) {
      this.form.home = file.url
    },
    upHole (file) {
      this.form.hole = file.url
    },
    deletePhoto (state) {
      if (state) {
        this.form.hole = ''
        this.holeList = []
      } else {
        this.form.home = ''
        this.homeList = []
      }
    },
    setPoster () {
      this.$axios.post(poster, {
        home: this.form.home,
        platform: this.form.platform,
        hole: this.form.hole
      }).then(res => {
        this.$message.success('上传成功！')
      }).catch(error => {
        this.$message.error('上传海报错误：' + error)
      })
    }
  },
  activated () {
    this.getPoster()
  }
}
</script>
<style scoped lang="scss">
  @import url('../../assets/css/main.css');
  @import "../../assets/sass/theme.scss";
  .b{
    margin-bottom:20px
  }
</style>

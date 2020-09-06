<template>
  <div class="course">
    <span style="font-size:20px">{{state===0?'新增微课':'修改微课'}}</span>
    <el-form :model="tableData" class="demo-form-inline" v-loading="loading">
      <el-form-item label="URL地址">
        <el-input v-model="tableData.url" placeholder="请填入URL地址"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="tableData.name" placeholder="请填入名称"></el-input>
      </el-form-item>
      <el-form-item label="来源地址">
        <el-input v-model="tableData.source" placeholder="请填入来源地址"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input v-model="tableData.summary" placeholder="请填入简介" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="8">
        <el-button type="primary" @click="$emit('close')">返回</el-button>
      </el-col>
      <el-col :span="8">
        <el-button type="success" :loading="loading" @click="subData">{{state===0?'提交新增':'提交修改'}}</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {courseInfo, addCourse} from '@/api/api'
export default {
  name: 'CourseInfo',
  props: {
    id: {
      type: String,
      default: ''
    },
    state: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      tableData: {
        url: '',
        name: '',
        source: '',
        summary: ''
      },
      loading: false
    }
  },
  methods: {
    setData () {
      this.loading = true
      this.$axios.get(courseInfo + this.id).then(res => {
        if (res.courseInfo) {
          this.tableData = res.courseInfo
        } else {
          this.$message.error('获取微课数据为空！')
        }
      }).catch(error => {
        this.$message.error('获取微课数据失败：' + error)
      })
      this.loading = false
    },
    subData () {
      if (this.state) {

      } else {
        this.$axios.post(addCourse, this.tableData).then(res => {
          if (res.data) {
            this.$message.success('添加微课成功！')
            Object.assign(this.data.tableData, this.$options.data().tableData)
            this.$emit('close')
          } else {
            this.$message.error('添加微课失败：' + res.message)
          }
        })
      }
    }
  },
  activated () {
    if (this.state === 1) {
      this.setData()
    }
  }
}
</script>

<style scoped>
  .course{
    display: flex;
    flex-direction: column;
  }
</style>

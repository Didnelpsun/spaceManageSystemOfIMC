<template>
  <div class="main">
    <el-form :model="query" label-width="150px" style="width:75vw">
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <el-form-item label="关键字">
            <el-input placeholder="请输入查询条件" v-model="query.keyword" clearable :suffix-icon="loading?'el-icon-loading':'el-icon-search'" size="medium"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6" :pull="1">
          <el-button type="success" size="small" @click="getList">搜索关键字</el-button>
        </el-col>
        <el-col :span="6">
          <el-button type="success" size="small" @click="getInfo(0)">添加微课</el-button>
        </el-col>
      </el-row>
    </el-form>
    <el-table :data="tableList" style="width: 85%" stripe max-height="50vh" size="small" :v-loading="loading">
      <el-table-column type="expand">
        <template slot-scope="props">
          <textarea v-model="props.row.summary" disabled></textarea>
        </template>
      </el-table-column>
      <el-table-column label="课程名" prop="name"></el-table-column>
      <el-table-column label="来源" prop="source"></el-table-column>
      <el-table-column label="点赞人数" prop="like_num"></el-table-column>
      <el-table-column label="喜欢人数" prop="favorite_num"></el-table-column>
      <el-table-column label="上传时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{ scope.row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="warning" @click="getInfo(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
      <el-pagination
       style="width:75vw;margin-top:15px;"
        background
        :page-sizes="[5, 10, 20]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="pagination.sum"
        :page-size="pagination.limit"
        @size-change="handleSizeChange"
        :current-page="pagination.page"
        @current-change="getList"
      >
      </el-pagination>
      <el-dialog :visible.sync="showDialog">
      </el-dialog>
  </div>
</template>

<script>
import {courseList, courseInfo} from '@/api/api'
export default {
  name: 'Course',
  data () {
    return {
      query: {
        keyword: ''
      },
      pagination: {
        limit: 10,
        page: 1,
        sum: 0
      },
      loading: false,
      tableList: [],
      showDialog: false,
      state: 0 // 0新增，1修改
    }
  },
  methods: {
    getList () {
      this.loading = true
      this.$axios.get(courseList, { params: {
        keyword: this.query.keyword,
        page: this.pagination.page,
        limit: this.pagination.limit
      }}).then(res => {
        if (res.data.list) {
          this.pagination.sum = res.data.sum
          this.tableList = res.data.list
        }
      }).catch(error => {
        this.$message.error('获取微课列表错误' + error)
      })
      this.loading = false
    },
    handleSizeChange (limit) {
      this.pagination.limit = limit
      this.getList(this.pagination.page)
    },
    getInfo (row) {
      if (row) {
        this.state = 1
        this.$axios.get(courseInfo + row.id).then(res => {
          if (res.courseInfo) {
            console.log(res.courseInfo)
          } else {
            this.$message.error('获取微课数据为空！')
          }
        }).catch(error => {
          this.$message.error('获取微课数据失败：' + error)
        })
      } else {
        this.state = 0
      }
      this.showDialog = true
    }
  },
  activated () {
    this.getList()
  }
}
</script>

<style>
  @import url('../../assets/css/main.css');
</style>

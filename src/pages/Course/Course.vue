<template>
  <div style="height:80vh; width:80vw">
    <el-form :model="query" label-width="150px">
      <el-row type="flex" justify="space-between">
        <el-col :span="12">
          <el-form-item label="关键字">
            <el-input v-model="query.keyword" clearable :suffix-icon="loading?'el-icon-loading':'el-icon-search'"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="success" size="small">搜索关键字</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Course',
  data () {
    return {
      query: {
        keyword: ''
      },
      pagination: {
        limit: 10,
        page: 0
      },
      loading: false
    }
  },
  methods: {
    getList () {
      this.$axios.get({params: {}})
    }
  }
}
</script>

<style>
</style>

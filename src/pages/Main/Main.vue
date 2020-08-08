<template>
  <el-container class="container">
    <el-aside width="250px" class="b"></el-aside>
    <el-container>
      <el-header class="lb" height="75px"></el-header>
      <el-main></el-main>
      <el-footer class="lb" height="75px"></el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/theme.scss";
  // @import url('../../assets/css/flex.css');
  .container{
    width: 100vw;
    height: 100vh;
  }
  .b{
    background-color: $b
  }
  .lb{
    background-color: $lb;
  }
</style>

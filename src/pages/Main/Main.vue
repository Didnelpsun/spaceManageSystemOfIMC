<template>
  <el-container class="container">
    <el-header class="lb r" height="10vh">
      <span class="title">
        心理站管理后台
      </span>
    </el-header>
    <el-container class="mainCon r">
      <el-aside :width="asideWidth" class="aside">
        <div class="b">
          <el-scrollbar>
            <Navigation :list="navigateList" :collapse="collapse"/>
          </el-scrollbar>
        </div>
        <div @click="changeCollapse" style="position:fixed; bottom:15px; left:15px" class="">
          <i v-if="collapse" class="el-icon-d-arrow-right" style="cursor: pointer;color:white"></i>
          <i v-else class="el-icon-d-arrow-left" style="cursor: pointer;color:white"></i>
        </div>
      </el-aside>
      <div style="width:88vw">
        <el-scrollbar>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-scrollbar>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
import {navigateList} from '@/data/navigateList'
export default {
  name: 'Main',
  data () {
    return {
      navigateList: navigateList,
      collapse: true, // 折叠导航栏
      asideWidth: 'auto'
    }
  },
  methods: {
    changeCollapse () {
      if (this.collapse) {
        this.asideWidth = '12vw'
        this.collapse = !this.collapse
      } else {
        this.collapse = !this.collapse
        this.asideWidth = 'auto'
      }
    }
  },
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/sass/theme.scss";
  @import '../../assets/css/flex.css';
  .container{
    width: 100vw;
    height: 100vh;
  }
  .title{
    font-size: $wwfont;
    color: $w;
  }
  .mainCon{
    height: 90vh;
    justify-content: space-between;
  }
  .b{
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-color: transparent transparent;
    height: 90vh;
    .inner-container::-webkit-scrollbar { display: none; };
  }
  .b::-webkit-scrollbar {
      width : 1px;
      height: 1px;

  .b::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  box-shadow   : inset 0 0 1px rgba(0, 0, 0, 0.2);
  background   : #535353;
  }
  .b::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 1px rgba(0, 0, 0, 0.2);
  border-radius: 1px;
  background   : #ededed;
  }}
  .aside{
    background-color: $dddb;
    overflow-x: hidden;
  }
  .lb{
    width: 100vw;
    background-color: $db;
  }
</style>
<style>
  .el-scrollbar__wrap
  {
  overflow-x: hidden;
  }
</style>

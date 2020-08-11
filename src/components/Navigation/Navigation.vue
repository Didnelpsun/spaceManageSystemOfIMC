<template>
  <div>
    <el-menu :background-color="menuBack" :text-color="textColor" :active-text-color="activeTextColor"
     :unique-opened="uniqueOpened" :collapse="collapse" default-active="0" style="border:0px">
      <template v-for="(listItem, i) in list">
        <el-submenu :index="i.toString()" v-bind:key="i.toString()" class="s">
          <template slot="title">
            <i v-if="listItem.icon" :class="listItem.icon" :style="'color:'+listItem.color"></i>
            <span slot="title" class="t1" v-if="listItem.name">{{listItem.name}}</span>
          </template>
          <template v-for="(page,j) in listItem.page">
            <el-menu-item :index="page.url" v-bind:key="(j*10+i).toString()" class="s">
              <i v-if="page.icon" :class="page.icon" :style="'color:'+page.color"></i>
              <el-link :href="page.url" :disabled="!page.url" class="t2">{{page.name}}</el-link>
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    menuBack: {
      type: String,
      default: '#409eff'
    },
    uniqueOpened: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: '#555'
    },
    activeTextColor: {
      type: String,
      default: '#409EFF'
    },
    collapse: {
      type: Boolean,
      default: true
    }
  },
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
  .t1{
    font-size: $bfont;
    color: $w;
  }
  .t2{
    font-size: $sfont;
    color: $w;
  }
  .s{
    justify-content: flex-start;
  }
</style>

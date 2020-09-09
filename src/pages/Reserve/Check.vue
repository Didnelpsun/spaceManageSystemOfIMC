<template>
  <div class="main">
    <div class="checkForm rc">
        <template v-for="item in tableList">
          <div :key="item.weekday" class="squareCol">
            <div>星期{{item.weekday}}</div>
            <div class="mar">{{item.date}}</div>
            <template v-for="data in item.item">
              <div :key="data.Id"  class="cc">
                <el-popover
                  placement="top-start"
                  trigger="hover"
                  :content="'教师ID：' + data.teacher+ ' 审核状态：'+ (data.reserve===2?'成功':data.reserve===1?'审核中':'失败或未审核')">
                  <div :class="data.reserve===2?'c3':data.reserve===1?'c2':'c1'" slot="reference">
                    <div class="square">
                      <!-- <div class="mar">教师ID：{{data.teacher}}</div> -->
                      <div>
                        <el-button type="success" icon="el-icon-check" :disabled="Boolean(data.reserve)" @click.stop="reserve({weekday:item.weekday, schedule: data.Id, check: true})"></el-button>
                        <el-button type="danger" icon="el-icon-close" :disabled="Boolean(data.reserve)" @click.stop="reserve({weekday:item.weekday, schedule: data.Id, check: false})"></el-button>
                      </div>
                    </div>
                  </div>
                </el-popover>
              </div>
            </template>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
import { reserveCheck, reserveForm } from '@/api/api'
import { reserveTestList } from '@/data/reserveTestList.js'
export default {
  name: 'ReserveCheck',
  data () {
    return {
      tableList: reserveTestList
    }
  },
  methods: {
    getList () {
      this.$axios.get(reserveForm).then(res => {
        if (res[0]) {
          this.tableList = res
        } else {
          this.$message.error('获取预约时间表为空！')
        }
      }).catch(error => {
        this.$message.error('获取预约时间表失败：' + error)
      })
    },
    reserve (data) {
      // console.log(data)
      this.$axios.post(reserveCheck, data).then(res => {
        this.$message.success('预约审核成功！')
        this.getList()
      }).catch(error => {
        this.$message.error('预约审核失败：' + error)
      })
    }
  },
  activated () {
    this.getList()
  }
}
</script>

<style scoped lang="scss">
  @import url('../../assets/css/main.css');
  @import url('../../assets/css/flex.css');
  @import "../../assets/sass/theme.scss";
  .checkForm{
    width: 100%;
    height: 100%;
    background-color: $bor;
    border: 1px solid $w;
  }
  .squareCol{
    // width: 12%;
    height: 84%;
  }
  .square{
    padding: $pa;
  }
  .c1{
    background-color: $b;
  }
  .c2{
    background-color: $o;
  }
  .c3 {
    background-color: $yg;
  }
  .mar{
    margin-bottom: 10px;
  }
</style>

<template>
  <div class="main">
    <h1 class="title">在线购票</h1>
    <div class="selectbox">
      <div class="city">当前定位城市：<span>广州</span></div>
      <div class="region">
        选择区域：
        <el-tag v-for="item in regions" :key="item" @click.native="choose(item)" :class="[tag[item]]">{{item}}</el-tag>
      </div>
      <div class="date">
        日期选择：
        <el-tag @click.native="chooseDate('today')" :class="[dTag['today']]">{{today}}（今天）</el-tag>
        <el-tag @click.native="chooseDate('tomorrow')" :class="[dTag['tomorrow']]">明天</el-tag>
        <el-tag @click.native="chooseDate('after')" :class="[dTag['after']]">后天</el-tag>
      </div>
      <div class="cinima-list">
          <el-table
            :data="cinemasSelect"
            stripe
            style="width: 100%">
            <el-table-column
              prop="city"
              label="城市"
              width="100">
            </el-table-column>
            <el-table-column
              prop="area"
              label="城区"
              width="100">
            </el-table-column>
            <el-table-column
              prop="ciname"
              label="影院名字"
              width="220">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
            <el-table-column label="操作" width="180">
               <template scope="scope">
                <el-button
                  size="small"
                  type="danger"
                  @click="buy(scope.$index, scope.row)">
                  立即购票
                </el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'ticket-choose',
  props : ['movie','database'],
  data () {
    let tag = {}
    let regions=['白云区', '从化区', '番禺区', '海珠区', '花都区', '黄埔区', '荔湾区', '萝岗区', '南沙区', '天河区', '越秀区']  
    for(let item of regions) {
      tag[item] = "unselect"
    }
    tag['白云区'] = "selected"
    let today = new Date()
    let toStr = today.getMonth() + '月'+ today.getDate() + '日'
    let dTag = {'today':'selected', 'tomorrow':'unselect', 'after':'unselect'}
    return {
      tag: tag,
      regions: regions,
      cinemas: [],
      cinemasSelect: [],
      today: toStr,
      dTag : dTag,
      cDate: 'today'
    }
  },
  mounted : function() {
      this.$http.get(this.database+"/cinema").then(response => {
        this.cinemas = response.data
        for (let item of this.cinemas) {
          if (item.area == "白云区") {
            this.cinemasSelect[this.cinemasSelect.length] = item;
          }
        }
      }, response => {
      });
  },
  methods: {
    choose (area) {
      if (this.tag[area] == "unselect") {
        this.tag[area] = "selected"
      } else {
        this.tag[area] = "unselect"
      }
      this.cinemasSelect = []
      for (let item of this.cinemas) {
          if (this.tag[item.area] == "selected") {
            this.cinemasSelect[this.cinemasSelect.length] = item;
          }
      }
    },
    chooseDate(item) {
      this.dTag = {'today':'unselect', 'tomorrow':'unselect', 'after':'unselect'}
      this.cDate = item
      this.dTag[item] = 'selected'
    },
    buy (index, row) {
      let ticket = {}
      ticket.movieId = this.movie.movieId
      ticket.cinemaId = row.cinemaId
      ticket.date = this.cDate
      console.log(ticket)
    }
  }
}
</script>

<style scoped>

  .title {
    text-align: left;
    color: #3C5F78;
    font-size: 24px;
    padding: 30px;
    border-bottom: 2px solid #3C5F78;
  }
  .selectbox {
    border: 1px solid #3C5F78;
    margin: 30px;
    padding: 20px;
    text-align: left;
    font-size: 13px;
    line-height: 30px;
  }
  .city span{
    color: cadetblue;
  }
  .el-tag {
    margin: 0 8px;
    cursor: pointer;
  }
  .selected {
    background-color: #B22222;
  }
  .unselect {
    background-color: gray;
  }
  .cinima-list {
    margin: 25px 0;
  }
</style>

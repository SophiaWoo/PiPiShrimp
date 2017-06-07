<template>
  <div class="ticket-choose">
    <el-card class="box-card">
        <div class="book-seat">
            <p class="screen">Screen</p>
            <div class="seat-group" v-for="item in items">
              <img src="/static/img/select-ed.svg" class="seat" alt="avaliable seat" v-if="item.isChosen">
              <img src="/static/img/select-ing.svg" class="seat" alt="avaliable seat" v-if="!item.isToChoose" @click="chooseHandler(item)">
              <img src="/static/img/select-will.svg" class="seat" alt="avaliable seat" v-if="item.isToChoose" @click="chooseHandler(item)">
            </div>
            <el-row class="legend">
              <img src="/static/img/select-ed.svg" class="seat" alt="avaliable seat"><span>不可选座位</span>
              <img src="/static/img/select-ing.svg" class="seat" alt="avaliable seat"><span>已选座位</span>
              <img src="/static/img/select-will.svg" class="seat" alt="avaliable seat"><span>可选座位</span>
            </el-row>
        </div>
        <div class="film-info">
          <p>影片: 神奇女侠</p>
          <p>影院: 上海宝山万画影城北上海店</p>
          <p>影厅: 5号厅</p>
          <p>场次: 6月4日(周日) 20:20</p>
          <p>座位: 未选座</p>
          <p>单价: 33</p>
          <p>总计: 0</p>
          <el-row type='flex' justify="end" class="choose-btn">
            <el-button type="primary">确认下单</el-button>
          </el-row>
        </div>
    </el-card>

  </div>  
</template>

<script>
export default {
  name: 'seat-choose',
  data () {
    return {
      chosen: false,
      items: [],
      seatNum: 90,
      isChosen: false,
      isToChoose: true
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      for (let i = 0; i < this.seatNum; i++) {
        this.items.push({
          isChosen: false,
          isToChoose: true
        })
      }
    },
    chooseHandler(item) {
      item.isToChoose = !item.isToChoose;
    }
  }
}
</script>

<style>
.ticket-choose {
  overflow: auto;
}

.seats {
  /*width: 25px;*/
  /*height: 25px;*/

  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  display: inline-block;
}

.empty, .book {
  cursor: pointer;
}

.seat-group {
  display: inline-block;
}

/*.empty {
  background-color: #ffffff;

}

.bought {
  background-color: #F5655D;
  border-color: #F5655D;
}

.book {
  background-color: #28C66A;
  border-color: #28C66A;
}
*/

.screen {
  box-sizing: border-box;
  border: 2px #eee solid;

  text-align: center;
  max-width: 490px;
  min-width: 490px;
  width: 490px;
}

.box-card {
  width: 80%;
  height: 90%;
  margin: auto;
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: left;
}

.book-seat {
  float: left;
  width: 538px;
  min-width: 538px;
  max-width: 538px;

  position: absolute;
  left: 110px;
  top: 10px;
}

.seat {
  width: 25px;
  cursor: pointer;

  margin: 8px 12px;
}

.film-info {
  float: right;
  padding: 10px;
}

.ticket-choose .el-card__body {
  padding: 0;
}

.film-info {
  background-color: #FFF5F5;
  width: 25%;
  min-height: 760px;
  overflow: hidden;
}

.choose-btn {
  position: relative;
  top: 60px;
  margin-right: 20px;
}

.legend {
  text-align: center;
}

.legend img {
  vertical-align: middle;
}
</style>

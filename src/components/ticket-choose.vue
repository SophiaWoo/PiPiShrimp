<template>
  <div class="ticket-choose">
    <el-card class="box-card">
        <div class="book-seat">
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
          </el-row>
          <el-row>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
            <div class="seats" :class="{ empty: chosen, book: !chosen }" @click="chooseHandler"></div>
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
  name: 'ticket-choose',
  data () {
    return {
      chosen: false
    }
  },
  methods: {
    chooseHandler() {
      this.chosen = !this.chosen;
    }
  }
}
</script>

<style>
.ticket-choose {
}

.seats {
  width: 18px;
  height: 18px;

   box-sizing: border-box;
   border-radius: 4px;
   border: 1px solid #bfcbd9;
   display: inline-block;
}

.empty, .book {
  cursor: pointer;
}

.empty {
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

.box-card {
  width: 80%;
  height: 70%;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: left;
}

.book-seat {
  float: left;
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
</style>

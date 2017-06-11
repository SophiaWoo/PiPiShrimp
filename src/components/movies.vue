<template>
    <div>
        <el-row :gutter="20" type="flex" justify="start" >
            <el-col :span="4" v-for="item in movieList" :key="item">
                <div class="grid-content" @click="detail(item.movieId, item)">
                  <div class="cover">
                    <img v-bind:src="item.imgUrl"/>
                  </div>
                  <div class="info">
                      <el-rate
                        v-model="item.score"
                        :max="5"
                        disabled
                        show-text
                        text-color="#ff9900"
                        text-template="{value}">
                      </el-rate>
                      <span class="movie-name name">{{item.moviename}}</span>
                      <span class="name">{{item.director}}</span>
                  </div>
                  <div class="mask">
                    <p>导演：{{item.director}}</p>
                    <p>主演：{{item.actor}}</p>
                    <p>评分：
                      <el-rate 
                        v-model="item.score"
                        :max="5" 
                        disabled 
                        show-text 
                        class="score"
                        text-color="#ff9900"
                        text-template="{value}">
                      </el-rate>
                    </p>
                    <p>时长：{{item["length"]}}</p>
                    <p>上映时间：{{item.releaseTime}}</p>
                    <p>下架时间：{{item.shelfTime}}</p>
                    <el-button type="info" size="small" v-text="action"></el-button>
                  </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'movies',
  props: ['movieList', 'database'],
  data() {
    return {
      action: "查看详情"
    }
  },
  methods: {
    detail(movieId, item) {
      // pass item for test
      this.$router.push({ name: 'detail', params: { movieId: movieId, movie: item}})
    }
  }
}
</script>

<style scoped>
  .el-row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .el-col {
    margin-bottom: 20px;
    border-radius: 4px;
  }
  /*movie-list*/
  .grid-content {
    background: lightgrey;
    border-radius: 4px;
    min-height: 320px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
            box-shadow:1px 0px 6px #333333;
       -moz-box-shadow:1px 0px 6px #333333;
    -webkit-box-shadow:1px 0px 6px #333333;
  }
  .cover {
    width:100%;
    overflow: hidden;
  }
  .cover img{
    width:95%;
    height: 220px;
  }
  .info {
    width: 100%;
    padding: 15px 0 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }
  .info .el-rate {
    position: absolute;
    right: -10px;
    top: -5px;
    transform: scale(0.75);
  }
  .info .name {
    margin-left: 10px;
    font-size: 14px;
  }
  .info .movie-name {
    font-weight: bold;
  }
  .mask {
    z-index: 2;
    background-color: rgba(105,105,105,0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: -100%;
    left: 0;
    color: white;
    text-align: left;
    font-size: 12px;
    line-height: 13px;
  }
  .mask p {
    padding: 0 15px;
  }
  .mask .el-button {
    display: block;
    margin: 40px auto;
  }
  .score {
    transform: scale(0.7);
    display: inline-block;
    line-height: 13px;
    position: relative;
    left: 15px;;
    top: -18px;
  }
  .grid-content:hover .mask {
    top: 0;
    transition: all 0.2s linear;
  }
</style>

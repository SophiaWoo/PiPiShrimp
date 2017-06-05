<template>
  <div>
    <div class="detail">
      <img class="blur bg" :src="movie.bannerUrl"/>

      <div class="title">
        <span class="mvname">{{movie.moviename}}</span>
      </div>

      <el-row :gutter="0">
        <el-col :span="7"><div class="poster"><img v-bind:src="movie.imgUrl"/></div></el-col>
        <el-col :span="17">
          <div class="info">
            <p>导演：{{movie.director}}</p>
            <p>主演：{{movie.actor}}</p>
            <p>评分：<el-rate v-model="movie.score" :max="5" disabled show-text text-color="#ff9900" class="score" text-template="{value}"></el-rate></p>
            <p>时长：{{movie["length"]}}</p>
            <p>上映时间：{{movie.releaseTime}}</p>
            <p>下架时间：{{movie.shelfTime}}</p>
            <p>简介：{{movie.brief}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <ticketChoose></ticketChoose>
  </div>  
</template>

<script>
import ticketChoose from './ticket-choose'
export default {
  name: 'detail',
  components: {
    ticketChoose
  },
  data () {
    return {
      movie: this.$route.params.movie,
      movieId: this.$route.params.movieId,
      database: "http://localhost:3003"
    }
  },
  methods: {

  }, 
  mounted () {
    // this.$http.get(this.database+"/movie/detail/1").then(response => {
    //     this.movie = response.data
    // }, response => {
    // });
  }
}

</script>

<style scoped>
.detail {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.bg {
  background-color: #375A67;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scale(1.5);
  z-index: -1;
}
.blur {
  -webkit-filter: blur(15px); /* Chrome, Opera */
     -moz-filter: blur(15px);
      -ms-filter: blur(15px);    
          filter: blur(15px);
  filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=0, MakeShadow=false);
}
.title {
  height: 60px;
  text-align: left;
  border-bottom: 1px #7C8A8E solid;
  padding: 0 50px;
}
.mvname {
  color: white;
  font-size: 24px;
  line-height: 60px;
  font-weight: bold;
}
.poster {
  margin-left: 50px; 
  position: relative;
}
.poster img{
  width: 80%;
  margin: 30px 0;
  float: left;
}
.info {
  color: white;
  text-align: left;
  margin: 30px 0px;
}
.info p {
  line-height: 23px;
}
.score {
  display: inline-block;
  line-height: 23px;
}
</style>

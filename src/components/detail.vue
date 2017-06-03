<template>
  <div>
    <div class="detail">
      <img class="blur bg" :src="movie.bannerUrl"/>

      <div class="title">
        <span class="mvname">{{movie.moviename}}</span>
      </div>

      <el-row :gutter="0">
        <el-col :span="8"><div class="poster"><img v-bind:src="movie.imgUrl"/></div></el-col>
        <el-col :span="16">
          <div class="info">
            <p>---------------------</p>
            <p>---------------------</p>
            <p>-------- TODO  ------</p>
            <p>---------------------</p>
            <p>---------------------</p>
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
  height: 400px;
  overflow: hidden;
}
.bg {
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
.el-col{
  height: 340px;
}
.poster {
  height: 100%;
  margin-left: 50px; 
  position: relative;
}
.poster img{
  height: 280px;
  margin: 30px 0;
  float: left;
}
.info {
  color: white;
}
</style>

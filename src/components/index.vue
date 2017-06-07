<template>
  <div class="index-page">
    <div calss="recommend-movie">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in recommendMovies" :key="item">
          <img v-bind:src="item.bannerUrl"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <films></films>
  </div>  
</template>

<script>
import films from './films'
export default {
  name: 'index',
  data () {
    return {
      database: "http://localhost:3003",
      recommendMovies: [],
    }
  },
  methods: {
    getMovies() {
      this.$http.get(this.database+"/recommend").then(response => {
        this.recommendMovies = response.data
      }, response => {
      });
    }
  },
  mounted: function() {
    this.getMovies()
  },
  components: {
    films
  }
}

</script>

<style scoped>
  /*swiper*/
  .el-carousel__item img {
    width: 100%;
    /*height: 100%;*/
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

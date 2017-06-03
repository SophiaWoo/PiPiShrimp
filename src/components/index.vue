<template>
  <div class="index-page">
    <div calss="recommend-movie">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in recommendMovies" :key="item">
          <img v-bind:src="item.bannerUrl"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="正在热映" name="hot-online">
          <movies :movieList="hotOnline"></movies>
        </el-tab-pane>
        <el-tab-pane label="即将上映" name="coming-soon">
          <movies :movieList="comingSoon"></movies>
        </el-tab-pane>
        <el-tab-pane label="热门电影" name="top-rate">
          <movies :movieList="topRate"></movies>
        </el-tab-pane>
      </el-tabs>
    </div>  
  </div>  
</template>

<script>
import movies from './movies'
export default {
  name: 'index',
  data () {
    return {
      database: "http://localhost:3003",
      recommendMovies: [],
      hotOnline: [],
      comingSoon: [],
      topRate: [],
      activeTab: 'hot-online'
    }
  },
  methods: {
    getMovies() {
      this.$http.get(this.database+"/allMv").then(response => {
        this.recommendMovies = response.data
        this.hotOnline = response.data
      }, response => {
      });
      this.$http.get(this.database+"/onShowMv").then(response => {
        this.comingSoon = response.data
        this.topRate = response.data
      }, response => {
      });
    },
    changeTab(tab, event) {
        // console.log(tab, event);
    }
  },
  mounted: function() {
    this.getMovies()
  },
  components: {
    movies
  }
}

</script>

<style scoped>
  .index-page {
    min-width: 960px;
  }
  /*swiper*/
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*tab*/
  .el-tab-pane {
    padding: 0 20px;
  }
</style>

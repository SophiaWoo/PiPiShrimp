<template>
  <div>
    <div calss="recommend-movie">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in recommendMovies" :key="item">
          <img v-bind:src="item.imgUrl"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="正在热映" name="hot-online">
          <el-row :gutter="10" :type="flex" justify="start">
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="即将上映" name="comming-soon">
          
        </el-tab-pane>
        <el-tab-pane label="热门电影" name="top-rate">
          
        </el-tab-pane>
      </el-tabs>
    </div>  
  </div>  
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      recommendMovies: [],
      activeTab: 'hot-online'
    }
  },
  methods: {
    getMovies() {
      this.$http.get("http://localhost:3003/movies").then(response => {
        this.recommendMovies = response.data
      }, response => {
      });
    },
    changeTab(tab, event) {
        // console.log(tab, event);
    }
  },
  mounted: function() {
    this.getMovies()
  }
}
</script>

<style scoped>
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
  /*tab-contain*/
  .el-col {
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 320px;
  }
</style>

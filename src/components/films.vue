<template>
  <div>
    <el-tabs v-model="activeTab" @tab-click="changeTab">
      <el-tab-pane label="正在热映" name="hot-online">
        <movies :movieList="hotOnline" :database="database"></movies>
      </el-tab-pane>
      <el-tab-pane label="即将上映" name="coming-soon">
        <movies :movieList="comingSoon" :database="database"></movies>
      </el-tab-pane>
      <el-tab-pane label="热门电影" name="top-rate">
        <movies :movieList="topRate" :database="database"></movies>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import movies from './movies'
export default {
  name: 'films',
  data () {
    return {
      hotOnline: [],
      comingSoon: [],
      topRate: [],
      activeTab: 'hot-online'
    }
  },
  props : {
    database: String
  },
  methods: {
    getMovies() {
      this.$http.get(this.database+"/onShowMv").then(response => {
        this.hotOnline = response.data
      }, response => {
      });
      this.$http.get(this.database+"/comingSoon").then(response => {
        this.comingSoon = response.data
      }, response => {
      });
      this.$http.get(this.database+"/allMv").then(response => {
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
  .el-tab-pane {
    padding: 0 20px;
  }
</style>

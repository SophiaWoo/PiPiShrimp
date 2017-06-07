<template>
    <div>
        <el-row :gutter="20" type="flex" justify="start" >
            <el-col :span="4" v-for="item in movieList" :key="item">
                <div class="grid-content bg-purple" @click="detail(item.movieId, item)">
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
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
  name: 'movies',
  props: ['movieList'],
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
    flex-wrap: wrap;
  }
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
    cursor: pointer;
  }
  /*movie-list*/
   .cover {
    width:100%;
  }
  .cover img{
    width:100%;
  }
  .info {
    width: 100%;
    padding: 15px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
</style>

<template>
    <div>
        <el-row :gutter="20" type="flex" justify="start">
            <el-col :span="6" v-for="item in movieList" :key="item">
                <div class="grid-content bg-purple">
                <div class="cover"><img v-bind:src="item.imgUrl"/></div>
                <div class="info">
                    <el-rate v-model="item.score" :max="5" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
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
  props: ['movieList']
}
</script>

<style scoped>
  .el-col {
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    height: 320px;
  }
  /*movie-list*/
   .cover {
    width:100%;
    height: 80%;
  }
  .cover img{
    width:100%;
    height: 100%;
  }
  .info {
    height: 20%;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .info .el-rate {
    position: absolute;
    right: -15px;
    top: 5px;
    transform: scale(0.7);
  }
  .info .name {
    margin-left: 10px;
    font-size: 14px;
  }
  .info .movie-name {
    font-weight: bold;
  }
</style>

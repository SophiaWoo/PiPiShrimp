<template>
  <div id="app">
    <header>
      <nav class="nav-bar">
        <div class="logo">
          <img src="./assets/logo.png" />
        </div>

        <div class="menu">
          <li>
            <a href="/">首页</a>
          </li>
          <li>
            <a href="#/films">影片</a>
          </li>
          <li>
            <a href="#/cinemas">影院</a>
          </li>
        </div>
        
        <div class="user">
          <router-link to="/sign">
            <el-button>Sign In | Sign Up</el-button>
          </router-link>
        </div>
        
        <div class="search-bar">
          <el-input
            placeholder="请输入关键字"
            icon="search"
            size="small"
            v-model="input"
            :on-icon-click="handleSearchClick">
          </el-input>
        </div>
      </nav>
    </header>

    <div class="main">
      <router-view></router-view>
    </div>

    <footer>
      <p>©CopyRight 2017 PiPiShrimp</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      input: '',
      database: 'http://localhost:3003'
    }
  },
  methods: {
    handleSearchClick(ev) {
      this.$http.get(this.database+"/movie/search?msg="+this.input).then(response => {
        let movies = response.data
        this.$router.push({ name: 'movies', params: {movieList: movies}})
      }, response => {
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 960px;
}
body {
  margin: 0;
}
.nav-bar {
  height: 60px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #3C5F78;
  background-image: url('./assets/banner.jpg')
}
.logo {
  float: left;
  height: 100%;
}
.logo img {
  width: 40px;
  height: 40px;
  padding: 10px;
}
.menu {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  float: left;
}
.menu li {
  list-style: none;
  margin: 0 20px;
}
.menu li a{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}
.menu li a:hover{
  color: silver;
}
.search-bar {
  height: 100%;
  width: 200px;
  float: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.user {
  height: 100%;
  width: 180px;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 10px;
}
.main {
  clear: both;
}
.user .el-button {
  color: #3C5F78;
}
</style>

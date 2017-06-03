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
            <el-button>Sign In</el-button>
          </router-link>
          <router-link to="/signup">
            <el-button type="primary">Sign Up</el-button>
          </router-link>
        </div>
        
        <div class="search-bar">
          <input type="search" placeholder="输入后按Enter搜索" />
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
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.nav-bar {
  height: 60px;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #31404f;
}
.logo {
  float: left;
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
.menu li a{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
}
.search-bar {
  height: 100%;
  width: 200px;
  float: right;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.search-bar input {
  font-size: 16px;
  padding: 5px;
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
</style>

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
        
        <div class="my">
          <img src="./assets/me.png" />
        </div>
        
        <div class="search-bar">
          <input type="search" placeholder="输入后按Enter搜索" />
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer></footer>
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
  height: 100px;
  width: 100%;
  background-color: #31404f;
}
.logo {
  float: left;
}
.logo img {
  width: 80px;
  height: 80px;
  padding: 10px;
}
.menu {
  height: 100%;
  /*width: 50%;*/
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
  float: right;
  display: flex;
  height: 100px;
  width: 200px;
  justify-content: center;
  flex-direction: column;
}
.search-bar input {
  font-size: 16px;
  margin: 20px;
  padding: 5px;
}
.my {
  float: right;
}
.my img {
  width: 60px;
  height: 60px;
  padding: 20px;
  border-radius: 50%;
}
</style>

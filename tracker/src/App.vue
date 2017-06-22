<template>
  <div id="app">
    <h1>Welcome to the Tracker</h1>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <li v-for="value in matches">
    {{ value }}
    </li>
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
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <navbar></navbar>
    <h1>Welcome to the Tracker </h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    navbar: require('./components/navbar.vue')
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
}
navbar {
  padding-bottom: 10px;
}
</style>

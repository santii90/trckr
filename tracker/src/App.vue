<template>
  <div id="app">
    <navbar></navbar>
    <h1>Welcome to the Tracker </h1>
    <router-view></router-view>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    navbar: require('./components/utils/navbar.vue')
  }
}
</script>

<style lang="scss">
  @import "~bulma/bulma.sass";
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
navbar {
  padding-top: 0px;
  padding-bottom: 10px;
}
</style>

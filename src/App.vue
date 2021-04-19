<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: white;
  padding: 0;
  margin: 0;
}
body{
  background: #080808;
  padding: 0;
  margin: 0;
}
</style>

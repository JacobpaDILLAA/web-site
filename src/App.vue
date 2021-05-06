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
    Home,
  },
}
</script>

<style>
  body{
    background: url(./images/mountain.jpeg);
    background-attachment: fixed; 
    background-size: cover;
    display: grid;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>

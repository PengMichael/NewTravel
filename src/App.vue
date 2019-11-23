<template>
  <div id="app">
   <!-- <img src="./assets/logo.png"> -->
      <!-- <keep-alive> 可以让界面保持活性  exclude不被缓存 -->
     <keep-alive exclude="Detail,Home">
       <router-view/>
     </keep-alive> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  
}
</style>

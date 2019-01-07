<template>
  <div id="app">
    <div class='banner'></div>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
<!--     <firstcomponent></firstcomponent>
    <secondcomponent></secondcomponent> -->

    <router-view class="view"></router-view>
    <router-link to="/first">first</router-link>
    <router-link to="/second">second</router-link>
    <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
</el-row>
  </div>
</template>

<script>

import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent,secondcomponent }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


.banner{

 width: 100%;
 height: 60px;
 background: #fe5453;

}

</style>

<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      author: "酷炫霸道涛",
      articles: [],
    }
  }
 }

</script>
 
<style>
</style>
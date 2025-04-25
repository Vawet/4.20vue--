<script setup>

</script>

<template>
  <router-view></router-view>
  <!-- 如果不写这个，页面什么都不会显示！所以是它跟router文件夹有关。 -->
   <!-- 这是在整个src文件夹之下的文件，它跟roter文件之下的index.js连接建立，然后router告诉我什么路由跳转到哪个views界面中 -->
    <!-- 然后views文件之下的两个页面又会使用到组件components -->
</template>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

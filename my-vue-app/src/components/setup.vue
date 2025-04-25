
<!-- 这里我只是在学习Vue3的setup和Vue2的setup的区别 也就是组合式API和响应式API的区别 -->
 <!-- 一个是写成函数的形式，一个是在script里面添加setup -->
<script setup>
// 从这里可以看出组合式API和选项式API的区别，显然组合式API极简
//   export default {
//     setup(){
      console.log(this);
      console.log('setup 执行中...');
      //属性暴露：setup 中返回值与模板进行绑定,
      const message = 'this is message'
      const logMessage = ()=>{ console.log(message) }
//       return { message, logMessage }    //setup return返回的对象,可以在模板中使用数据、方法等;
//     },
//     beforeCreate(){ console.log('beforeCreate 执行中...'); }
//   }
</script>
<!-- setup与模板的交互: 可以直接获取setup return的函数\属性 -->
<template>
  {{message}}
  <button @click="logMessage" >点击log</button>
</template>
<style scoped></style>
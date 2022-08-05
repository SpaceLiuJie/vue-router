<template>
  <div id="app">
    <!-- 
      router-link 默认 a标签
      to 更改url中路由地址
     -->
    <nav>
      <router-link to="/home">首页</router-link>
      <router-link to="/feidian">沸点</router-link>
    </nav>

    <!-- 
      router-view 作用渲染路由组件
     -->
    <router-view />
  </div>
</template>

<script>
import Home from "./Home.vue";
// console.log(this);
export default {
  components: {
    Home,
  },
  created() {
    // 验证 路由实例对象挂在到vue实例对象 success
    console.log(this.$route); // 地址对象,表示当前页面的配置对象
    console.log(this.$router); // 路由实例对象
  },
};
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
a{
  font-style: none;
  display: inline-block;
  color: #fff;
  padding: 15px;
  text-decoration: none;
}
nav{
  width: 100%;
  background-color: #000;

}
</style>
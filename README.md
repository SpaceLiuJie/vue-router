## 可行性分析
> 为了实现单页面应用.需要学习路由创建

- 掘金
- vue官网
- admin管理系统
   - vue-template-admin
   - 若一


### 1: 创建路由实例


~~~js
// router/index.js
import VueRouter from 'vue-router'
import Vue from 'vue'\
Vue.use(VueRouter)
console.log('router index run');

let router = new VueRouter({

})
export default router
~~~

### 2: 挂在路由实例对象
~~~js
import router from './router/index.js'
new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')

~~~

> test: 在组件中打印 this.$route this.$router

### 3: 编写路由代码


## 安装
`npm i vue-router@3 -D`
`yarn add vue-router@3 -D`


## 路由详解

### 组件

### 配置项

#### 模式

#### 嵌套路由


### api





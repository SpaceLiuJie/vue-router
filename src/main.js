import Vue from 'vue'
import App from './App.vue'
import state from './state.js'
import router from './router/index.js'

Vue.config.productionTip = false
Vue.prototype.$state = state

new Vue({
  router, // 将路由实例放在vue实例中 --->  $route $router
  render: h => h(App),
}).$mount('#app')

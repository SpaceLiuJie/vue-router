import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter);
console.log('router index run');

let router = new VueRouter({
    routes:[
        { // 当url中路由地址 /home 可以匹配到当前路由配值对象,route-view中默认加载路由组件 
            path:'/home', // 配置匹配路由地址
            name:'Home', // 路由名称
            // 注册路由组件.
            component:()=>import('@/Home.vue'), // @/ === src/
        },{
            path:'/feidian',
            name:'FeiDian',
            component:()=>import('@/FeiDian.vue'),
            beforeEnter(to,from,next){
                console.log('配置对象守卫,beforeenter');
                next()
            }
        }
    ]
})

console.log(router);
export default router
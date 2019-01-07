import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
// 在入口文件中引入基本样式
import './assets/styles/reset.css'
import './assets/styles/border.css'

 
 //开启debug模式
Vue.config.debug = true;
 
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);
 
// const router = new VueRouter({
//      routes:[
//             {path:'/first',compoent:firstcomponent},
//             {path:'/second',compoent:secondcomponent},
//      ],
//      mode:'history'
// })

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
 
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})


const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')

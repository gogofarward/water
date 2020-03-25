import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Homepage from '@/components/Homepage'
import BaseMap from "../components/map/BaseMap";
import Query from "../components/map/Query";

Vue.use(Router)

// 解决两次访问相同路由地址报错
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Homepage',
      component: Homepage,
      children: [
        {
          path: '/basemap',
          name: 'BaseMap',
          component: BaseMap
        },
        {
          path: '/query',
          name: 'Query',
          component: Query
        }
      ]
    }
  ]
})

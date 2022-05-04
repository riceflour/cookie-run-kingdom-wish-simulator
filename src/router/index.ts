import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Result from '../views/Result.vue'
import Featured from '../views/Featured.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/result',
    name: 'Result',
    component: Result
  },
  {
    path: '/featured',
    name: 'Featured',
    component: () => import(/* webpackChunkName: "featured" */ '../views/Featured.vue')
  },
  {
    path: '/About',
    name: 'Cookie Run Kingdom Wish Simulator',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

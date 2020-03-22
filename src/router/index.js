import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashbord from '../views/Dashbord.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashbord',
    component: Dashbord
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

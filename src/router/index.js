import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Choose from '../views/Choose.vue'
import Shop from '../views/Shop.vue'
import Order from '../views/Order.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Choose',
    name: 'Choose',
    component: Choose
  },
  {
    path: '/Shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/Shop/Order',
    name: 'Order',
    component: Order
  },
  {
    path: '/Shop/Details',
    name: 'Details',
    component: Details
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

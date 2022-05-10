import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Rhythm from '../views/Rhythm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Rhythm',
      name: 'Rhythm',
      component: Rhythm
    }
  ]
})
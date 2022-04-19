import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
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
      path: '/Rhythm',
      name: 'Rhythm',
      component: Rhythm
    }
  ]
})
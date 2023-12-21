import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBody from './views/HomeBody.vue'
import ProductBody from './views/ProductBody.vue'
import RhythmBody from './views/RhythmBody.vue'
import iidxRadarBody from './views/iidxRadarBody.vue'
//import newtimeline from './views/newtimelineBody.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBody
  },
  {
    path: '/Product',
    name: 'Product',
    component: ProductBody
  },
  {
    path: '/Rhythm',
    name: 'Rhythm',
    component: RhythmBody
  },
  {
    path: '/iidx_radar',
    name: 'iidx_radar',
    component: iidxRadarBody
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
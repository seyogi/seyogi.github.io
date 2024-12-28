import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBody from './views/HomeBody.vue'
import RhythmBody from './views/RhythmBody.vue'
import iidxRadarBody from './views/iidxRadarBody.vue'
import TestBody from './views/TestBody.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBody
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
  },
  {
    path: '/test',
    name: 'test',
    component: TestBody
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
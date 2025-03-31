import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBody from './views/HomeBody.vue'
import AboutMeBody from './views/AboutMeBody.vue'
import RhythmBody from './views/RhythmBody.vue'
import iidxRadarBody from './views/iidxRadarBody.vue'
import ContactBody from './views/ContactBody.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBody
  },
  {
    path: '/AboutMe',
    name: 'AboutMe',
    component: AboutMeBody
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
    path: '/Contact',
    name: 'Contact',
    component: ContactBody
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
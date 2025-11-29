import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBody from './views/HomeBody.vue'
import AboutBody from './views/AboutBody.vue'
import RhythmBody from './views/RhythmBody.vue'
import iidxRadarBody from './views/iidxRadarBody.vue'
import ContactBody from './views/ContactBody.vue'
import Stopwatch from './components/Otherparts/Stopwatch.vue'
import BlogPost from './components/Blogparts/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBody
  },
  {
    path: '/Stopwatch',
    name: 'Stopwatch',
    component: Stopwatch
  },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: BlogPost
  },
  {
    path: '/About',
    name: 'About',
    component: AboutBody
  },
  {
    path: '/MusicGameRecord',
    name: 'MusicGameRecord',
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
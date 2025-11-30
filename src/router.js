import { createRouter, createWebHashHistory } from 'vue-router'
import HomeBody from './views/HomeBody.vue'
import AboutBody from './views/AboutBody.vue'
import RhythmBody from './views/RhythmBody.vue'
import iidxRadarBody from './views/iidxRadarBody.vue'
import ContactBody from './views/ContactBody.vue'
import BlogBody from './views/BlogBody.vue'
import BlogPost from './components/Blogparts/blog_post.vue'
import Stopwatch from './components/Otherparts/Stopwatch.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeBody
  },
  {
    path: '/stopwatch',
    name: 'stopwatch',
    component: Stopwatch
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogBody
  },
  {
    path: '/blog/:slug',
    name: 'blogpost',
    component: BlogPost
  },
  {
    path: '/About',
    name: 'About',
    component: AboutBody
  },
  {
    path: '/MGRecord',
    name: 'MGRecord',
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
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import RouterPlugin from './router'
import AxiosPlugin from './axios'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import './assets/style.css'; 

 
library.add(fas, fab)

const app = createApp(App)

app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Pagination', Pagination)
app.component('Navigation', Navigation)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(RouterPlugin)
app.use(VueAxios, axios)
app.use(AxiosPlugin)
app.mount('#app')

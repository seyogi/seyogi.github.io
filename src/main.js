import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import AxiosPlugin from '@/axios/index'
import RouterPlugin from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";


library.add(fas, fab)

createApp(App)
    .component('Carousel', Carousel)
    .component('Slide', Slide)
    .component('Pagination', Pagination)
    .component('Navigation', Navigation)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(VueAxios, axios)
    .use(AxiosPlugin)
    .use(RouterPlugin)
    .mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Slide } from 'vue-burger-menu'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas,fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('slide', Slide);
Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})

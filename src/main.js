import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Slide } from 'vue-burger-menu'

Vue.component('slide', Slide);
Vue.config.productionTip = false

new Vue({
  router,
  el: '#app',
  render: h => h(App),
})

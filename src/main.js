import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

// import './lib/flexible'

Vue.use(VueRouter)


new Vue({
  el: '#app',
  router,
  render (h) {
    return h(App)
  }
})
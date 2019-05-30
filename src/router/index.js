import VueRouter from 'vue-router'

import Home from '../views/home/home.vue'
import Carousel from '../views/carousel/carousel.vue'
import NineBox from '../views/nine-box/nine-box.vue'

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },,
    {
      path: '/carousel',
      component: Carousel
    },
    {
      path: '/nineBox',
      component: NineBox
    }
  ]
})
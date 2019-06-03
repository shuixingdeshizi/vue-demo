import VueRouter from 'vue-router'

import Home from '../views/home/home.vue'
import Carousel from '../views/carousel/carousel.vue'
import NineBox from '../views/nine-box/nine-box.vue'
import FlipCard from '../views/flip-card/flip-card.vue'

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
    { // 九宫格抽奖
      path: '/nineBox',
      component: NineBox
    },
    { // 记忆翻牌
      path: '/flipCard',
      component: FlipCard
    }
  ]
})
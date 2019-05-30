<template>
  <section class="wrapper">
    <div class="carousel">
      <ul class="carousel-list">
        <li class="carousel-item">1</li>
        <li class="carousel-item">2</li>
        <li class="carousel-item">3</li>
        <li class="carousel-item">4</li>
      </ul>
    </div>
  </section>
</template>

<script>
  import Carousel from './js/carousel'
  export default {
    name: 'carousel',
    data () {
      return {
        carousel: ''
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.carousel = new Carousel('.carousel')
      })
    }
  }
</script>

<style lang="scss">
  .carousel {
    width: 300px;
    overflow: hidden;
  }
  .carousel-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .carousel-item {
    flex-grow: 0;
    flex-shrink: 0;
    width: 100%;
    background: #eee;
    box-sizing: border-box;
    border: 1px solid #333;
    text-align: center;
  }
</style>

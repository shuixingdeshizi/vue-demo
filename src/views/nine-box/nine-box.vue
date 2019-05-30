<template>
  <section>
    <div class="nine-box">
      <ul class="box-list">
        <li class="box-item" data-box-index=0>1</li>
        <li class="box-item">2</li>
        <li class="box-item">3</li>
        <li class="box-item">4</li>
        <li class="box-item" @click="start">5</li>
        <li class="box-item">6</li>
        <li class="box-item">7</li>
        <li class="box-item">8</li>
        <li class="box-item">9</li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'nine-box',
    methods: {
      start () {
        let orders = [0, 1, 2, 5, 8, 7, 6, 3]
        let result = Math.floor(Math.random() * 8)
        console.log('result:', result)
        if (orders.indexOf(result) === -1) {
          alert('系统错误')
          return
        }
        let boxItems = document.querySelectorAll('.box-item')
        let counter = 0
        let preIndex = 0
        let step = function () {
          let index = orders[counter % orders.length]

          if (preIndex !== index) {
            boxItems[preIndex].style.border = ''
          }

          boxItems[index].style.border = '1px solid blue'
          counter++
          preIndex = index
          setTimeout(step, 500)
        }
        setTimeout(step, 500)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .nine-box {
    width: 300px;
    height: 300px;
  }
  .box-list {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    width: 100%;
    height: 100%;
  }
  .box-item {
    width: 33.33%;
    height: 33.33%;
    flex-shrink: 0;
    flex-grow: 0;
    background: #ccc;
    box-sizing: border-box;
    border: 1px solid #333;
  }
</style>

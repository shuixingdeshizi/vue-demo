<template>
  <section>
    <div class="nine-box">
      <ul class="box-list">
        <template v-for="(item, index) in prizeList">
          <li class="box-item" 
            v-if="index !== 4"
            :key="index"
            :data-prize-id="item.id"
          >{{item.prizeName}}</li>
          <li class="box-item"
            v-else
            :key="index"
            @click="lottery"
          >抽奖</li>
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
  import NineBoxLottery from './js/nine-box-lottery.js'
  export default {
    name: 'nine-box',
    data () {
      return {
        prizeList: []
      }
    },
    created () {
      this.fetchPrizeInfo()
    },
    methods: {
      fetchPrizeInfo () {
        let res = [
          {
            id: 1,
            prizeName: '手表'
          },
          {
            id: 2,
            prizeName: 'iPhone6'
          },
          {
            id: 3,
            prizeName: 'iPhone7'
          },
          {
            id: 4,
            prizeName: 'iPhone8'
          },
          {
            id: 5,
            prizeName: 'iPhoneX'
          },
          {
            id: 6,
            prizeName: 'iPhoneXR'
          },
          {
            id: 7,
            prizeName: 'iPhoneMax'
          },
          {
            id: 8,
            prizeName: 'Mac 256'
          }
        ]
        res.splice(4, 0, {})
        this.prizeList = res
      },
      lottery: (function () {
        let orders = [0, 1, 2, 5, 8, 7, 6, 3]
        let index = 0
        let status = false
        let times = 0
        let start = function () {
          if (status) {
            return
          }
          status = true
          times = 0
          let result = Math.floor(Math.random() * 8)
          console.log(this.prizeList)
          let boxItems = document.querySelectorAll('.box-item')
          let preIndex = 0
          let step = () => {
            let index = orders[times % orders.length]

            if (preIndex !== index) {
              boxItems[preIndex].style.border = ''
            }
            boxItems[index].style.border = '1px solid blue'
            if (times > 30 && boxItems[index].getAttribute('data-prize-id') == this.prizeList[result].id) {
              alert('success')
              return
            }
            console.log('aaa')
            preIndex = index
            times++
            setTimeout(step, 500)
          }
          setTimeout(step, 500)
        }
        return start
      })()
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

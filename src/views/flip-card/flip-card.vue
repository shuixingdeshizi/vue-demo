<template>
  <div class="memory-game" data-framework="vue">
    <div class="memory-card"
      @click="flipCard($event)"
    >
      <img class="front-face" src="./img/vue.svg" alt="vue">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="react"
      @click="flipCard"
    >
      <img class="front-face" src="./img/react.svg" alt="react">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="ember"
      @click="flipCard"
    >
      <img class="front-face" src="./img/ember.svg" alt="ember">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="ember"
      @click="flipCard"
    >
      <img class="front-face" src="./img/ember.svg" alt="ember">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>
    
    <div class="memory-card"
      @click="flipCard"
    >
      <img class="front-face" src="./img/vue.svg" alt="vue">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="angular"
      @click="flipCard"
    >
      <img class="front-face" src="./img/angular.svg" alt="angular">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="backbone"
      @click="flipCard"
    >
      <img class="front-face" src="./img/backbone.svg" alt="backbone">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="react"
      @click="flipCard"
    >
      <img class="front-face" src="./img/react.svg" alt="react">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="aurelia"
      @click="flipCard"
    >
      <img class="front-face" src="./img/aurelia.svg" alt="aurelia">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>
    
    <div class="memory-card" data-framework="aurelia"
      @click="flipCard"
    >
      <img class="front-face" src="./img/aurelia.svg" alt="aurelia">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="backbone"
      @click="flipCard"
    >
      <img class="front-face" src="./img/backbone.svg" alt="backbone">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>

    <div class="memory-card" data-framework="angular"
      @click="flipCard"
    >
      <img class="front-face" src="./img/angular.svg" alt="angular">
      <img class="back-face" src="./img/js-badge.svg" alt="js-badge">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flip-card',
    methods: {
      flipCard: (function () {
        let cards = []

        let hasFlippedCard = false,
            lockBoard = false,
            firstCard,
            secondCard


        function checkForMatch() {
          let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
          isMatch ? disableCard() : unflipCard()
        }

        function disableCard () {
          firstCard.removeEventListener('click', flipCard, false)
          secondCard.removeEventListener('click', flipCard, false)
          resetBoard()
        }

        function resetBoard () {
          hasFlippedCard = false
          lockBoard = false
          firstCard = null
          secondCard = null
        }

        function unflipCard () {
          lockBoard = true
          setTimeout(() => {
            firstCard.classList.remove('flip')
            secondCard.classList.remove('flip')
            resetBoard()
          }, 1500)
        }


        let flipCard = (e) => {
          // 初始化 cards 
          if (cards.length === 0) {
            cards = document.querySelectorAll('.memory-card')
          }

          if (lockBoard) return false
          let target = e.currentTarget
          if (target === firstCard) return false

          target.classList.add('flip')

          if (!hasFlippedCard) {
            hasFlippedCard = true
            firstCard = target
            return false
          }
          secondCard = target
          checkForMatch()
        }
        return flipCard
      })()
    }
  }
</script>

<style scoped>
  body, html, div, p {
    padding: 0;
    margin: 0;
  }
  .memory-game {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90vw;
    height: 90vw;
    margin: 0 auto;
    background: #ccc;
  }
  .memory-card {
    position: relative;
    box-sizing: border-box;
    width: calc(25% - 0.2rem);
    height: calc(33.33% - 0.2rem);
    transform-style: preserve-3d;
    transition: transform .2s ease;
  }
  .memory-card:active {
    transform: scale(.5);
  }
  .memory-card.flip {
    transform: rotateY(180deg);
  }
  .front-face, .back-face {
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: .4rem;
    border-radius: .1rem;
    background: #1c7ccc;
    backface-visibility: hidden;
  }

  .front-face {
    transform: rotateY(180deg);
  }
</style>




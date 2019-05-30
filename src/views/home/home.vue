<template>
  <section>
    <h1>Home</h1>
    <nav>
      <ul>
        <li><router-link to="/carousel">banner 轮播</router-link></li>
        <li><router-link to="/nineBox">九宫格</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </section>
</template>

<script>
  export default {
    name: 'home'
  }
</script>



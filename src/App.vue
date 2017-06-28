<template>
  <div id="app">
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  loader: 'vue-loader',
  options: {
    html: 'attrs=video:src img:src'
  }
}
</script>

<style>
  html,body{
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app{
    width: 100%;
    height: 100%;
  }
  .slide-enter-active, .fade-leave-active {
    transition-duration: .5s;
  }
  .slide-enter, .fade-leave-active {
    transform: translateX(100%);
  }
</style>

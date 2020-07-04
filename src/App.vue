<template>
  <div id="app">
    <!-- 导航栏 -->
    <app-nav></app-nav>
    <!-- 侧边栏 -->
    <app-aside></app-aside>
    <!-- 内容区 -->
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNav from './pages/common/AppNav'
import AppAside from './pages/common/AppAside'

export default {
  name: 'App',
  components: {
    AppNav,
    AppAside
  }
}
</script>

<style lang="stylus" scoped>
.container
  position absolute
  top 0.8rem
  left 10vw
  width 90%
  height 94vh
</style>

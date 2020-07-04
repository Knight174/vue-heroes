<template>
  <div class="app-aside">
    <ul class="aside">
      <router-link to="/list" tag="li">武将列表</router-link>
      <router-link to="/foo" tag="li">武器列表</router-link>
      <router-link to="/bar" tag="li">装备列表</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang="stylus" scoped>
.app-aside
  .aside
    width 10vw
    height calc(100vh - 40px)
    min-height 90vh
    background-color #eee
    & li
      display block
      width 100%
      height 1rem
      line-height 1rem
      text-align center
      cursor pointer
    .active
      display block
      color #fff
      background-color #aaa
</style>

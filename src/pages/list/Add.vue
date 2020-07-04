<template>
  <div class="add">
    <h1>添加武将</h1>
    <!-- <form action="#"> -->
      <label for="heroName">武将名字</label>
      <input class="txt" type="text" id="heroName" key="heroName" placeholder="名字" v-model.trim="heroName">
      <label for="heroGender">武将性别</label>
      <input class="txt" type="text" id="heroGender" key="heroGender" placeholder="性别" v-model.trim="heroGender">
      <input type="submit" value="Submit" class="submit" @click.prevent="handleSubmit">
    <!-- </form> -->
  </div>
</template>

<script>
export default {
  name: 'add',
  data () {
    return {
      heroName: '',
      heroGender: ''
    }
  },
  methods: {
    handleSubmit () {
      if (!this.heroName || !this.heroGender) {
        alert('名字或性别未正确填写！')
        this.heroName = ''
        this.heroGender = ''
        return false
      }
      this.addHero()
    },
    addHero () {
      this.axios.post('list/', {
        name: this.heroName,
        gender: this.heroGender
      }).then(res => {
        alert('数据添加成功！')
        this.heroName = ''
        this.heroGender = ''
        this.$router.push({
          name: 'list'
        })
      }).catch(e => {
        alert('数据上传失败！')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.add
  padding .5rem 1rem
  h1
    margin-top .5rem
    margin-bottom .5rem
    font-size .5rem
    font-weight 800
  label
    display block
    margin-right 1rem
    margin-bottom .1rem
    font-weight bold
  .txt
    border 2px solid #bbb
    border-radius 5px
    padding .05rem 1em
    margin-bottom 1rem
  .submit
    display block
    margin-bottom .5rem
    height .6rem
    line-height .6rem
    padding 0 .5rem
    border-radius .1rem
    border 1px solid #bbb
    color #333
    &:hover
      background-color #333
      color #eee
</style>

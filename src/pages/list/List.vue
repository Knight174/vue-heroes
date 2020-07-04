<template>
  <div class="list">
    <h1>武将列表</h1>
    <button class="add" @click="showAddVue">Add</button>
    <table class="table" border="1">
      <thead>
        <td>编号</td>
        <td>名字</td>
        <td>性别</td>
        <td>操作</td>
      </thead>
      <tr
        v-for="item of listInfo"
        :key="item.id"
      >
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.gender}}</td>
        <td class="operate">
          <a @click="emitId(item.id)">编辑</a>
          <a @click.prevent="handleDelete(item.id)">删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      listInfo: []
    }
  },
  methods: {
    getData () {
      this.axios.get('list/')
        .then((res) => {
          this.getDataSucc(res)
        }).catch(e => { console.log(e) })
    },
    getDataSucc (res) {
      const { status, data } = res
      if (status === 200 && data) {
        this.listInfo = data
      }
    },
    handleDelete (id) {
      if (confirm('确定删除此项数据吗？')) {
        this.axios.delete('list/' + id).then(res => {
          this.getData()
        })
      }
    },
    showAddVue () {
      this.$router.push({
        name: 'add'
      })
    },
    emitId (ID) {
      this.$router.push({
        name: 'edit',
        params: { id: ID }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
.list
  padding .5rem 1rem
  h1
    margin-top .5rem
    margin-bottom .5rem
    font-size .5rem
    font-weight 800
  .add
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
  .table
    text-align center
    width 100%
    & td
      padding-top .2rem
      padding-bottom .2rem
    .operate
      width 5rem
      &>a
        margin-left .5rem
        cursor pointer
</style>

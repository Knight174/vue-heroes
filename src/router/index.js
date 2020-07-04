import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../pages/list/List.vue'
import Foo from '../pages/foo/Foo.vue'
import Bar from '../pages/bar/Bar.vue'
import Add from '../pages/list/Add.vue'
import Edit from '../pages/list/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'list'
    }
  },
  {
    path: '/list',
    name: 'list',
    component: List
  }, {
    path: '/foo',
    name: 'foo',
    component: Foo
  }, {
    path: '/bar',
    name: 'bar',
    component: Bar
  }, {
    path: '/add',
    name: 'add',
    component: Add
  }, {
    path: '/edit/:id',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router

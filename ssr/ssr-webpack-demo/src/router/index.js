import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Foo from '../components/Foo.vue'
import Bar from '../components/Bar.vue'
import Baz from '../components/Baz.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/baz', component: Baz }
  ]
})

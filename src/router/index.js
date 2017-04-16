import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import films from '@/components/films'
import cinemas from '@/components/cinemas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/films',
      name: 'films',
      component: films
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: cinemas
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})

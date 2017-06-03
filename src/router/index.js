import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import films from '@/components/films'
import cinemas from '@/components/cinemas'
import Err404 from '@/components/err404'

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
    },
    {
      path: '/sign',
      name: 'Sign',
      component: resolve => require(['@/components/sign.vue'], resolve)
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: resolve => require(['@/components/ticketConfirm.vue'],resolve)
    },
    {
      path: '*',
      name: 'all',
      component: Err404,
      redirect: '/404'
    },
    {
      path: '/404',
      name: 'err404',
      component: Err404
    }
  ]
})

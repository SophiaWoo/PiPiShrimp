import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import films from '@/components/films'
import detail from '@/components/detail'
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
      path: '/detail',
      name: 'detail',
      component: detail
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
      path: '/pay',
      name: 'Payment',
      component: resolve => require(['@/components/pay.vue'],resolve)
    },
    {
      path: '/choose',
      name: 'Choose',
      component: resolve => require(['@/components/seat-choose.vue'], resolve)
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

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/classify',
      component: resolve => require(['@/pages/classify'], resolve)
    }, {
      path: '/cart',
      component: resolve => require(['@/pages/cart'], resolve)
    }, {
      path: '/my',
      component: resolve => require(['@/pages/my'], resolve)
    }, {
      path: '/home',
      component: resolve => require(['@/pages/home'], resolve)
    }
  ]
})

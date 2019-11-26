import Vue from 'vue'
import Router from 'vue-router'
import storage from '@/utils/storage'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/location'
    }, {
      path: '/classify',
      component: resolve => require(['@/pages/classify'], resolve),
      name: 'classify',
      meta: {
        login: false,
        title: '分类'
      }
    }, {
      path: '/cart',
      component: resolve => require(['@/pages/cart'], resolve),
      name: 'cart',
      meta: {
        login: true,
        title: '购物车'
      }
    }, {
      path: '/my',
      component: resolve => require(['@/pages/my'], resolve),
      name: 'my',
      meta: {
        login: true,
        title: '我的'
      }
    }, {
      path: '/home',
      component: resolve => require(['@/pages/home'], resolve),
      name: 'home',
      meta: {
        login: false,
        title: '首页'
      }
    }, {
      path: '/login',
      component: resolve => require(['@/pages/login'], resolve)
    }, {
      path: '/location',
      component: resolve => require(['@/pages/location'], resolve)
    }, {
      path: '/address',
      component: resolve => require(['@/pages/address'], resolve)
    }, {
      path: '/addtheaddress',
      component: resolve => require(['@/pages/addtheaddress'], resolve),
      meta: {
        login: true,
        title: '添加地址'
      }
    }, {
      path: '/selectcity',
      component: resolve => require(['@/pages/selectcity'], resolve)
    }, {
      path: '/details/:id',
      component: resolve => require(['@/pages/details'], resolve)
    }, {
      path: '/order',
      component: resolve => require(['@/pages/order'], resolve)
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  if (to.meta.login) {
    document.cookie.indexOf('token') !== -1 ? next() : next('/login')
    storage.setItem('callbackpath', to.path)
  }
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router

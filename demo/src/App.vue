<template>
  <div id="app">
    <router-view/>
    <Tabbar v-if="pathUrl"></Tabbar>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import storage from '@/utils/storage'
export default {
  name: 'App',
  data () {
    return {
      path: '',
      white: {a: '/login', b: '/location', c: '/addtheaddress', d: '/address', e: '/selectcity'}
    }
  },
  computed: {
    ...mapState(['info']),
    pathUrl () {
      // const count = 0
      if (this.path !== '/login' && this.path !== '/order' && this.path !== '/location' && this.path !== '/address' && this.path !== '/addtheaddress' && this.path !== '/selectcity' && this.path.slice(0, -2) !== '/details') {
        return true
      }
      return false
      // for (let k in this.white) {
      //   if (this.path !== this.white[k]) {
      //     return true
      //   }
      //   return false
      // }
    }
  },
  mounted () {
    this.address(storage.getItem('location'))
  },
  watch: {
    $route (to, from) {
      this.path = to.path
      console.log(to.path)
    }
  },
  methods: {
    ...mapActions(['getinfo', 'address'])
  },
  created () {
    this.getinfo()
    console.log('我是app测试是否进入每个页面都会执行')
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
  box-sizing: border-box;
}
html,body,#app{
  width: 100%;
  height: 100%;
  font-size: 28px;
}
</style>

<template>
  <div>
    <tab-nav :wid="true" :menu="menu" @change="change" class="shop-nav"></tab-nav>
    <Shopitem type="wide" v-for="(item,index) of data" :key="index" :item="item"></Shopitem>
  </div>
</template>

<script>
import Shopitem from '@/components/shopitem/index'
export default {
  data () {
    return {
      menu: [{
        title: 'asd'
      }, {
        title: 'sadasd'
      }],
      data: [{
        imgsmall: 'https://img.dmallcdn.com/cornerMarkV3/6098/1_360x360H',
        img: 'https://img.dmallcdn.com/20180919/a1b43ff4-706b-49b6-af4d-f2ebcb041f21_360x360H',
        name: '缤纷鱼港精选鱼肉片 约500g',
        price: '￥33.88',
        original: '￥42.88'
      }],
      navIndex: 0
    }
  },
  methods: {
    change (index) {
      this.navIndex = index
      console.log(index)
    }
  },
  components: {
    Shopitem
  }
}
</script>

<style lang="scss" scoped>
.shop-nav{
  overflow: hidden;
}
</style>

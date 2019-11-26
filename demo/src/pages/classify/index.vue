<template>
  <div class="classify">
    <div class="classify-nav">
      <tab-nav :menu="menu.slice(0,2)" @change="change" class="nav1"></tab-nav>
      <i class="iconfont icon-fangdajing nav2"></i>
    </div>
    <div class="content">
      <classify-list @clickList="clicklist" class="left-list" :data="leftData"></classify-list>
      <div class='shoplist' ref="shoplist">
        <div class="right-shop">
          <tab-nav :wid="true" :menu="menu1" @change="rightnav" class="shop-nav"></tab-nav>
          <shop-item v-for="(item,index) of shopData" :key="index" :item="item" type="wide" @click="clickCart"></shop-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      menu: [],
      menu1: [],
      leftData: [],
      shopData: [],
      topNavIndex: 0,
      leftListIndex: 0,
      rightNav: 0,
      meme: {
        imgsmall: 'https://img.dmallcdn.com/cornerMarkV3/6098/1_360x360H',
        cover: 'https://img.dmallcdn.com/20180919/a1b43ff4-706b-49b6-af4d-f2ebcb041f21_360x360H',
        name: '缤纷鱼港精选鱼肉片 约500g',
        price: '￥33.88',
        original: '￥42.88'
      },
      shop_id: 0,
      scroll: {}
    }
  },
  created () {
    this.getclassifylist()
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.shoplist)
  },
  methods: {
    async getshop () {
      let shopdatas = await this.$api.classify.getclassifyshop(this.shop_id)
      if (shopdatas.code === 0) {
        console.log(shopdatas)
        this.shopData = shopdatas.data
      }
    },
    async change (index) {
      this.topNavIndex = index
      this.leftListIndex = 0
      this.rightNav = 0
      this.getclassifylist()
      this.shop_id = this.menu1[0].id
      this.getshop()
    },
    clicklist (index) {
      this.leftListIndex = index
      this.rightNav = 0
      this.getclassifylist()
      this.shop_id = this.menu1[0].id
      this.getshop()
    },
    rightnav (index) {
      this.rightNav = index
      console.log(index)
      this.shop_id = this.menu1[index].id
      this.getshop()
    },
    async getclassifylist () {
      let data = await this.$api.classify.getclassifylist()
      const menulist = data.data
      this.menu = menulist
      this.leftData = menulist[this.topNavIndex].children
      this.menu1 = menulist[this.topNavIndex].children[this.leftListIndex].children
    },
    clickCart (data) {
      console.log('列表页点击商品', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.classify{
  width: 100%;
  height: calc(100vh - 100px);
}
.classify-nav{
  display: flex;
  .nav1{
    flex:9;
  }
  .nav2{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.content{
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  // justify-content: center;
  align-items: center;
  .left-list{
    width: 25%;
    height: 100%;
    overflow: hidden;
  }
  .shoplist{
    width: 75%;
    height: 100%;
    overflow: hidden;
  }
}

</style>

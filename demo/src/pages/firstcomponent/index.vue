<template>
  <div class="page">
    <scroll-view class="content" @scrollBottom="memeda">
      <swiper v-if="swiperData.length>0" :options="swiperOption" ref="mySwiper" class="home-swiper">
        <swiper-slide v-for="(item,index) of swiperData" :key="index"><img :src="item.image" alt=""></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <List :data="listData"/>
      <Commodity
      :src="item.cover"
      v-for="(item,index) of shopdata"
      :key="index"
      :data="item.wares"
      />
    </scroll-view>
  </div>
</template>

<script>
import Commodity from '@/components/commodity/index'
export default {
  props: {
    navIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        loop: true
      },
      shopdata: [],
      swiperData: [],
      listData: [],
      pages: 0
    }
  },
  components: {
    Commodity
  },
  created () {
    this.getbanner()
    this.getIconlist()
    this.getShop()
  },

  methods: {
    async getbanner () {
      const data = await this.$api.home.getbanner(this.navIndex)
      this.swiperData = data.data
    },
    async getIconlist () {
      const data = await this.$api.home.geticonlist(this.navIndex)
      this.listData = data.data.reverse()
    },
    async getShop () {
      const data = await this.$api.home.getshop(this.pages)
      console.log(data)
      this.shopdata = this.shopdata.concat([...data.data])
    },
    async memeda () {
      this.pages++
      this.getShop()
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
  width: 100%;
  height: calc(100vh - 265.6px);
}
.content{
  height: 100%;
}
.home-swiper{
    width: 100%;
    height: 300px;
    .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
.swiper-pagination >>> .swiper-pagination-bullet-active{
  background: $base-color;
}
</style>

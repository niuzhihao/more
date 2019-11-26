<template>
    <div class="home">
        <Header></Header>
        <tab-Nav :menu="nav" @change="change" :Index="Index"></tab-Nav>
        <swiper :options="swiperOption" ref="mySwiper" class="home-swiper">
            <!-- slides -->
            <swiper-slide><First :navIndex="navIndex"/></swiper-slide>
            <swiper-slide><Last :navIndex="navIndex"/></swiper-slide>
            <!-- Optionalcontrols -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <scroll-view/>
    </div>
</template>

<script>
import First from '@/pages/firstcomponent/index'
import Last from '@/pages/lastcomponent/index'
import Header from '@/components/header/index'

export default {
  data () {
    return {
      swiperOption: {
        on: {
          slideChangeTransitionEnd: () => {
            this.Index = this.$refs.mySwiper.swiper.activeIndex
          }
        }
      },
      nav: [{
        title: '多点超市',
        value: 0
      }, {
        title: '全球精选',
        value: 1
      }],
      Index: 0,
      navIndex: 0,
      addresss: ''
    }
  },
  components: {
    First,
    Header,
    Last
  },
  methods: {
    change (index) {
      this.navIndex = index
      this.$refs.mySwiper.swiper.slideTo(index)
    }
  }
}
</script>
<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    background-color: #fff;
}

</style>

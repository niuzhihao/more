<template>
  <div>
    <swiper v-if="swiperData.length>0" :options="swiperOption" ref="mySwiper" class="wahaha">
      <swiper-slide v-for="(item,index) of swiperData" :key="index"><img :src="item" alt=""></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="zs" v-html="detail"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperData: [],
      swiperOption: {},
      detail: ''
    }
  },
  created () {
    let { id } = this.$route.params
    this.$api.classify.getdetails(id).then(res => {
      if (res.code === 1) {
        this.swiperData = JSON.parse(res.data.wareImgList)
        this.detail = res.data.detail
      }
    })
  }
}
</script>

<style lang="scss">
.wahaha{
    width: 100%;
    height: 750px;
    >.swiper-wrapper{
        width: 100%;
        height: 100%;
        >.swiper-slide{
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
.zs{
  width: 100%;
  >p{
    width: 100%;
    >img{
      width: 100%;
    }
  }

}
</style>

<template>
  <div class="page">
    <scroll-view class="content">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item,index) of swiperData" :key="index"><img :src="require('@/'+item)" alt=""></swiper-slide>
        <!-- Optionalcontrols -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <List :data="listData"/>
    </scroll-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperData: [
        'assets/images/swiper1.png',
        'assets/images/swiper2.png',
        'assets/images/swiper3.png',
        'assets/images/swiper4.png',
        'assets/images/swiper5.png',
        'assets/images/swiper6.png'
      ],
      listData: [{
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }, {
        img: 'https://img.dmallcdn.com/dshop/201910/83a1066e-ee4a-40f6-9ecf-cd1031c78bc6_240x240H',
        name: '早晚市'
      }]
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
.swiper-container{
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

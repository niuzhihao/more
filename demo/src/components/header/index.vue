<template>
  <div class="home-head">
      <div>
          <i class="iconfont icon-didian"></i>
          <span @click="gotoaddress">送至:{{ city || addresss }} <i class="iconfont icon-chevron-thin-right"></i></span>
      </div>
      <div>
          <i class="iconfont icon-fangdajing"></i>
          <img src="https://img.dmallcdn.com/store/201902/3d91b1fd-6c1d-46b2-ac14-5dee58ed1836" alt="">
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import storage from '@/utils/storage'
export default {
  data () {
    return {
      addresss: '',
      city: ''
    }
  },
  computed: {
    ...mapState(['address'])
  },
  created () {
    this.addresss = this.address
    this.city = storage.getItem('location')
  },
  methods: {
    gotoaddress () {
      this.$router.push('/address')
    }
  }
}
</script>

<style lang="scss" scoped>
.home-head{
    width: 100%;
    height: 84.16px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    @include setBottomBorder($border-color);
    overflow: hidden;
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        *{
            margin: 0 10px;
        }
        >span{
            color: $default-shop-color;
        }
        &:last-child{
            i{
                font-size: 32px;
                color: $border-color;
                font-weight: 800;
            }
            img{
                width: 48px;
                height: 48px;
            }
        }
    }
}
</style>

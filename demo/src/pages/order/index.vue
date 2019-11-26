<template>
  <div class="order">
    <login-head class="header">
      <i class="iconfont icon-zuojiantou-01" style="background:#fff;color:#000" @click="callback"></i>
      订单确认
    </login-head>
    <scroll-view class="content">
      <div class="site" v-if="!isSite">
        <span>
          {{userInfo.username}} {{getphone}}
          <i class="iconfont icon-bianji1" @click="isSite=true"></i>
        </span>
        <span>
          送到：{{userInfo.indetails}}
        </span>
        <div class="line"></div>
      </div>
      <Unfoldsite v-else @click="lala" @change='changesite' :userInfo="userInfo" :phone="getphone"/>
      <div class="distribution" @click="clickDistribution">
        <span>配送方式</span>
        <span>多点配送<i class="iconfont icon-youjiantou-01"></i></span>
      </div>
      <div class="distributionTime">
        <span>配送方式</span>
        <span>多点配送<i class="iconfont icon-youjiantou-01"></i></span>
      </div>
      <div class="distribution">
        <span>在线支付</span>
        <span><input type="checkbox" style="border-radius:50%"></span>
      </div>
      <div class="distributionTime">
        <span>优惠券/优惠码</span>
        <span>0张可用<i class="iconfont icon-youjiantou-01"></i></span>
      </div>
      <div class="distribution">
        <span>可用积分<i>可用2积分抵扣<span>￥0.02</span></i></span>
        <span><mt-switch v-model="payment"></mt-switch></span>
      </div>
      <div class="remark">
        <span>备注</span><span><input type="text" placeholder="填写安全存放地址，请按门铃等配送相关要求"></span>
      </div>
      <div class="distribution">
        <span>订单价格</span>
      </div>
      <ul class="pricediscounts">
        <li>
          <span>商品金额</span>
          <span>xxx</span>
        </li>
        <li>
          <span>优惠金额</span>
          <span>xxx</span>
        </li>
        <li>
          <i>满69元免服务费</i>
        </li>
      </ul>
      <div class="distribution">
        <span>实际支付</span>
        <span>xxx</span>
      </div>
      <div class="commoditylist">
        <div>
          <img v-for="(item,index) of cartlist" :key="index" :src="getshop(parseInt(item.shop))" alt="">
        </div>
        <div>共{{cartlist.length}}件</div>
      </div>
      <div class="distribution">
        <span>发票</span>
        <span>如何开发票？</span>
      </div>
    </scroll-view>
    <div class="foot">
      <span>合计<span>￥</span>xxx</span><span>提交订单</span>
    </div>
    <mt-popup
      v-model="distribution"
      position="bottom"
      class="dialog">
      <div class="distribution">
        <span>配送方式</span><span @click="cancel">取消</span>
      </div>
      <div class="distribution">
        <span>多点配送</span><span class="iconfont icon-dui" style="color:orange;font-size:16px;"></span>
      </div>
    </mt-popup>
    <mt-popup
      v-model="site"
      position="bottom"
      @click='changesite'
      class="dialog">
    <div class="site">
      <span>可选用地址</span>
      <span @click="cancel">取消</span>
    </div>
    </mt-popup>
  </div>
</template>

<script>
import Unfoldsite from './unfoldsite'
import storage from '@/utils/storage'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      distribution: false,
      isSite: false,
      payment: false,
      userInfo: {},
      site: false
    }
  },
  created () {
    this.$api.address.getaddress(storage.getItem('info').data.id).then(res => {
      res.data.forEach(item => {
        if (+item.pitch) {
          this.userInfo = item
        }
      })
    })
    this.$store.dispatch('addresss/getAddress')
    this.$store.dispatch('cart/getcommodity')
    this.$store.dispatch('cart/getcart')
  },
  methods: {
    lala (data) {
      this.isSite = data
    },
    callback () {
      this.$router.go(-1)
    },
    getshop (id) {
      if (this.commodity.filter(item => parseInt(item.id) === parseInt(id))[0]) {
        return this.commodity.filter(item => parseInt(item.id) === parseInt(id))[0].cover
      }
    },
    clickDistribution () {
      this.distribution = true
    },
    cancel () {
      this.distribution = false
      this.site = false
    },
    changesite () {
      this.site = true
    }
  },
  computed: {
    ...mapState('cart', ['commodity', 'cartlist']),
    ...mapState('address', ['List']),
    getphone () {
      return storage.getItem('info').data.phone
    }
  },
  components: {
    Unfoldsite
  }
}
</script>

<style lang="scss" scoped>
.order{
  width: 100%;
  .site{
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    @include setBottomBorder(#ccc);
    padding: 14px 30px;
    span{
      display: flex;
      align-items: center;
    }
  }
  .distribution{
    width: 100%;
    height: 94px;
    display: flex;
    justify-content: space-between;
    @include setBottomBorder(#ccc);
    padding: 14px 30px;
    span{
      display: flex;
      align-items: center;
    }
  }
  .header{
    @include setBottomBorder(#ccc)
  }
  .content{
    width: 100%;
    height: calc(100vh - 176px);
    background-color: #f6f6f6;
    .commoditylist{
      width: 100%;
      height: 134px;
      display: flex;
      background-color: #fff;
      padding: 0 30px;
      div{
        flex:7;
        display: flex;
        img{
          width: 25%;
          height: 100%;
        }
        &:nth-child(2){
          flex:3;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .pricediscounts{
      width: 100%;
      height: 182px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 14px 30px;
      background-color: #fff;
      li{
        flex:1;
        display: flex;
        justify-content: space-between;
        i{
          font-style: normal;
          color: #c8cccd;
          font-style: 26px;
        }
      }
    }
    .distribution{
      width: 100%;
      height: 90.8px;
      display: flex;
      padding: 22px 30px;
      @include setBottomBorder(#ccc);
      background-color: #fff;
      margin-top: 30px;
      span{
        flex:7;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          i{
            font-size: 24px;
            color: #888;
            display: flex;
            font-style: normal;
            >span{
              color: $base-color;
            }
          }
        &:nth-child(2){
          flex:3;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
      }
    }
    .remark{
      width: 100%;
      height: 90.8px;
      display: flex;
      span{
        flex :2;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        &:nth-child(2){
          flex:7;
          input{
            border:0;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .distributionTime{
      width: 100%;
      height: 134px;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      span{
        flex:1;
        display: flex;
        align-items: center;
        padding: 22px 30px;
        background-color: #fff;
        &:nth-child(2){
          display:flex;
          justify-content: space-between;
        }
      }
    }
    .site{
      width: 100%;
      height: 143.2px;
      display: flex;
      padding: 22px 30px;
      flex-direction: column;
      background-color: #fff;
      position: relative;
      span{
        flex:1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: relative;
        i{
          position: absolute;
          right: 0;
          font-size: 60px;
        }
      }
      .line{
        width: 100%;
        height: 2.5px;
        margin: 0,0,20px;
        background:url('../../assets/images/shoppingline.png');
        background-size: auto 4px;
        box-sizing: inherit;
        position: absolute;
        left: 0;
        bottom: 0;
      }
    }
  }
  .foot{
    width: 100%;
    height: 88px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    >span{
      flex:7;
      color: $base-color;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &:nth-child(2){
        flex:3;
        background-color: $base-color;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }
    }
  }
  .dialog{
    width: 100%;
    height: 70%;
  }
}
</style>

<template>
  <div class="home">
    <div class='my-top'>
      <div>
        <p>hello,你好</p>
        <button @click="gotologin">去登录</button>
      </div>
    </div>
    <div class="my-nav">
      <span>我的订单</span><span>全部订单></span>
    </div>
    <div class="my-order">
      <span>
        <i></i>
        <span>待支付</span>
      </span>
      <span>
        <i></i>
        <span>代发货</span>
      </span>
      <span>
        <i></i>
        <span>已发货</span>
      </span>
    </div>

    <div class="my-nav" style="margin-top:10px">
      <span>我的资产</span>
    </div>
    <div class="my-order">
      <span>
        <i class="me">￥0.00</i>
        <span>余额</span>
      </span>
      <span>
        <i class="me">0</i>
        <span>积分</span>
      </span>
      <span>
        <i class="me">0</i>
        <span>优惠券</span>
      </span>
    </div>

    <div class="my-nav" style="margin-top:10px">
      <span>我的服务</span>
    </div>
    <div class="my-orders">
      <span>
        <i class="me"></i>
        <span>会员中心</span>
      </span>
      <span>
        <i class="me"></i>
        <span>收货中心</span>
      </span>
      <span>
        <i class="me"></i>
        <span>帮助中心</span>
      </span>
      <span>
        <i class="me"></i>
        <span>客服电话</span>
      </span>
      <span>
        <i class="me"></i>
        <span>发票中心</span>
      </span>
      <span>
        <i class="me"></i>
        <span>售后/退款</span>
      </span>
      <span>
        <i class="me"></i>
        <span>我想买的</span>
      </span>
    </div>

  </div>
</template>

<script>
export default {
  methods: {
    gotologin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.home{
  width: 100%;
  height: 100%;
}
.my-top{
  width: 100%;
  height: 260px;
  background: url('https://static.dmall.com/kayak-project/usercenter/dist/usercenter/common/image/mine-top-banner-bg.png');
  background-size: cover;
  color: #fff;
  >div{
    width: 90%;
    height: calc(48.2px*2);
    position: absolute;
    right: 0;
    top: 60px;
    >button{
      width: 150px;
      height: 60px;
      border-radius: 30px;
      border:0;
      background-color: #fff;
      color: $base-color;
    }
  }
};
.my-nav{
  width: 100%;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 30px;
}
.my-order{
  width: 100%;
  height: calc(48px*2);
  display: flex;
  span{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    >i{
      width: 100%;
      height: 60%;
      &.me{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
    }
    >span{
      width: 100%;
      height: 40%;
    }
  }
}
.my-orders{
  width: 100%;
  height: calc(48px*2);
  display: flex;
  flex-wrap: wrap;
  span{
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:10px 0;

    >i{
      width: 100%;
      height: 60%;
      &.me{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
      }
    }
    >span{
      width: 100%;
      height: 40%;
    }
  }
}
</style>

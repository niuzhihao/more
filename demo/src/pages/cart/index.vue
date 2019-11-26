<template>
  <div class="car">
    <div class="car-nav">
      <div class="car-nav-left">
        <h3>多点君需要你的详细地址呦~</h3>
        <p>送至：农大南路 广泰小区</p>
      </div>
      <div class="car-nav-right">></div>
    </div>
    <div class="car-content">
      <div class="car-img" v-if="!isshow">
        <img src="https://img.dmallcdn.com//dshop/201805/324b1ec1-0ada-410e-8970-23cc28812c9b" alt />
      </div>
      <div class="car-btn" v-if="!isshow">
        <button>我要买买买</button>
      </div>
      <ul class="cart-list" v-if='isshow'>
        <li v-for="(item,index) of cartlist" :key="index">
          <span>
            <input type="checkbox" :checked="parseInt(item.pitch)" @change='changePitch(item.id,$event)'>
          </span>
          <span v-if="commodityFn(item.shop)[0]">{{commodityFn(item.shop)[0].name}}</span>
          <span>
            <button @click="changecount(item.count-1,item.id)">-</button><span>{{item.count}}</span><button @click="changecount(+item.count+1,item.id)">+</button>
          </span>
        </li>
        <li class="money">
          <span>
            <span>合计：xxx钱 (不含运费)</span>
            <span>促销已抵扣金额xxx钱</span>
          </span>
          <span>
            <Button @click="gotoOrder">选好了</Button>
          </span>
        </li>
      </ul>

    </div>
    <div class="car-footer">
      <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=908475056,2017561379&fm=26&gp=0.jpg" alt="">
       <p>足迹</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: {

  },
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    ...mapState('cart', ['cartlist', 'commodity']),
    isshow () {
      if (this.cartlist) {
        if (this.cartlist.length > 0) {
          return true
        } else {
          return false
        }
      }
    }

  },
  methods: {
    commodityFn (id) {
      return this.commodity.filter(item => item.id === parseInt(id))
    },
    gotoOrder () {
      this.$router.push('/order')
    },
    changecount (count, ids) {
      this.updateCartData(count, ids)
    },
    changePitch (id, e) {
      if (e.target.checked) {
        this.$api.shop.show(id, 1).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
        })
      } else {
        this.$api.shop.show(id, 0).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
        })
      }
    },
    updateCartData (count, ids) {
      this.$api.shop.update(count, {ids}).then(res => {
        if (res.code === 1) {
          this.$store.dispatch('cart/getcart')
        }
      })
    }
  },
  created () {
    this.$store.dispatch('cart/getcart')
    this.$store.dispatch('cart/getcommodity')
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.car {
  width: 100%;
  height: 100%;
  background: #f6f6f6;
  position: relative;
  .car-nav {
    width: 100%;
    height: 120px;
    background: #fff;
    display: flex;
    border-top: 0.1rem solid tomato;

    .car-nav-left {
      flex: 7;
      padding-left: 0.35rem;
      h3 {
        font-size: 0.35rem;
        font-weight: normal;
        line-height: 0.95rem;
      }
      p {
        font-size: 0.25rem;
        color: #ccc;
        line-height: 0.15rem;
      }

      //  font-size:0.25rem;
    }
    .car-nav-right {
      flex: 3;
      text-align: right;
      line-height: 1.2rem;
      margin-right: 0.25rem;
      font-size: 0.45rem;
      color: #ccc;
    }
  }
  .car-content {
    width: 100%;
    height: calc(100vh - 220px);
    display: flex;
    flex-direction: column;
    .car-img {
      flex: 5;
      display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;
      img {
        width: 2rem;
        height: 2rem;
      }
    }
    .car-btn {
      flex: 5;
      display: flex;
      justify-content: center;
       button{
         width: 3rem;
         height: 0.8rem;
         background: #ff8143;
         outline: none;
         border: 0;
         border-radius: 10px;
         color: #fff;
       }
    }
    .cart-list{
      width: 100%;
      .money{
        width: 100%;
        height: 132px;
        display: flex;
        >span{
          flex:7;
          display: flex;
          flex-direction: column;
          padding:15px 0;
          >span{
            width: 100%;
            height: 50%;
          }
          &:nth-child(2){
            flex:3;
            display: flex;
            justify-content: center;
            align-items: center;
            >button{
              width: 80%;
              height: 80%;
              background-color: $base-color;
              color: #fff;
              border-radius: 10px;
            }
          }
        }
      }
      li{
        width: 100%;
        height: 132px;
        display: flex;
        align-items: center;
        >span{
          width: 10%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &:nth-child(2){
            width: 60%;
            height: 100%;
          }
          &:nth-child(3){
            width: 30%;
            height: 100%;
          }
        }
      }
    }
  }
  .car-footer{
    width: 1rem;
    height: 1rem;
    background: #fff;
    border-radius: 50%;
    box-shadow: 2px 2px #ccc;
    position: absolute;
    bottom: 2rem;
    right: 0.2rem;
     display: flex;
      justify-content: center; /* 水平居中 */
      align-items: center;
      flex-direction: column;
    img{
      width: 0.5rem;
      height:  0.5rem;
    }
    p{
      font-size:0.12rem;
    }
  }
}
</style>

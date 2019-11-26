<template>
  <footer class="footer">
    <router-link v-for="(item,index) of tabbar" :key="index" :to='item.to'>
      <i :class="{'active':topath===item.to}"></i>
      <span :class="{'active':topath===item.to}">{{item.name}}</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      tabbar: [{
        name: '首页',
        to: '/home'
      }, {
        name: '列表',
        to: '/classify'
      }, {
        name: '购物车',
        to: '/cart'
      }, {
        name: '我的',
        to: '/my'
      }],
      topath: ''
    }
  },
  watch: {
    $route (to) {
      this.topath = to.path
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 100px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    a{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      &:nth-child(2) i{
        background-position-x: -85px;

      }
      &:nth-child(3) i{
        background-position-x: -290px;

      }
      &:nth-child(4) i{
        background-position-x: -385px;

      }
      i{
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        background-image :url('../../assets/images/btm-bar-sprt.png');
        background-size: 500px 200px;
        background-position-x: 18px;
      };
      .active{
        background-position-y: -100px;
        color: $base-color;
      }
      span{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

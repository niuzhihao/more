<template>
  <div id="container">
    <h2>多点超市</h2>
    <img src="@/assets/images/c189da23e6d7e951498b1680db2b80d6.gif" alt="">
    <p>正在定位</p>
    <span></span>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Location from '@/utils/location'
export default {
  methods: {
    ...mapActions(['address'])
  },
  created () {
    // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
    Location.getLocation()
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 50%;
    height: 30%;
    display: block;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span{
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

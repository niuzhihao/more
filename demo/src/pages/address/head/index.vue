<template>
  <div class="top_inp">
    <div class="inp">
      <i class="iconfont icon-fangdajing"></i>
      <input type="text" placeholder="小区、街道、大厦" v-model="city">
    </div>
    <Button class="button">取消</Button>
  </div>
</template>

<script>
import Location from '@/utils/location'
export default {
  data () {
    return {
      city: ''
    }
  },
  watch: {
    city () {
      this.antiShake(() => {
        Location.getcity(this.city).then(res => {
          this.$parent.searchdata = res
        })
      }, 1000)()
    }
  },
  methods: {
    antiShake (fn, wait) {
      let timer = null
      return function () {
        if (timer !== null) clearTimeout(timer)
        timer = setTimeout(fn, wait)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.top_inp{
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 222;
    .inp{
      height: 80%;
      width: 70%;
      display: flex;
      position: relative;
      i{
        position: absolute;
        left: 20px;
        top:30%;
        font-size: 32px
      }
      input{
        flex:1;
        border:2px solid #c8cccd;
        padding-left: 50px;
      }
    }
    .button{
      height: 80%;
      width: 20%;
      background-color: $button-color;
      color:#fff;
      display: block
    }
  }
</style>

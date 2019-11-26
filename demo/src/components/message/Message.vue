<template>
  <div class="message" :class="{'success':status==='success','error':status==='error'}" v-if="isShow">{{msg}}</div>
</template>

<script>
export default {
  name: 'message',
  props: {
    msg: {
      type: String,
      default: '我爱你'
    },
    status: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: true,
      Timeout: null
    }
  },
  mounted () {
    this.Timeout = setTimeout(() => {
      this.isShow = false
      this.$nextTick(() => {
        this.$destroy()
      })
    }, 2000)
  },
  destroyed () {
    clearTimeout(this.Timeout)
  }
}
</script>

<style lang="scss" scoped>
.message{
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  text-align: center;
  line-height: 40px;
  z-index: 22222;
  &.success{
    background: #0f0;
    color: #fff;
  }
  &.error{
    background-color: #f00;
    color: #fff;
  }
}
</style>

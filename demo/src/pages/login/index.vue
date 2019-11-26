<template>
  <div>
    <login-head>
      <i @click="goback" class="iconfont icon-zuojiantou-01"></i>
      <span>验证手机</span>
    </login-head>
    <img src="//img.dmallcdn.com/common/e2767579-05b5-4b08-87b1-12d4fc62d59f_750H" alt="">
    <login-from></login-from>
  </div>
</template>

<script>
export default {
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 100%;
  height: 351.76px;
}
</style>

<template>
  <ul class="login">
    <li>
      <input type="tel" placeholder="请输入你的手机号" v-model="phone">
      <button @click="clickauthcode">{{codetitle}}</button>
    </li>
    <li>
      <input type="text" placeholder="请输入验证码" v-model="authcode">
    </li>
    <li>
      <button @click="login">queren</button>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import storage from '@/utils/storage'
export default {
  data () {
    return {
      timeout: 60,
      phone: '',
      authcode: '',
      isclick: true,
      codetitle: '获取验证码',
      Interval: ''
    }
  },
  methods: {
    ...mapActions(['getinfo']),
    async clickauthcode () {
      if (this.phone) {
        this.codetitle = this.timeout
        this.timeOut()
        let authCode = await this.$api.user.getauthcode(this.phone)
        console.log(authCode)
      } else {
        console.log('电话不能为空')
      }
    },
    async login () {
      let data = await this.$api.user.login(this.phone, this.authcode)
      let callbackpath = storage.getItem('callbackpath') || '/home'
      this.getinfo()
      if (data.code === 1) {
        this.$router.push(callbackpath)
      }
    },
    timeOut () {
      this.Interval = setInterval(() => {
        this.timeout--
        this.codetitle = this.timeout
        if (this.timeout <= 0) {
          clearInterval(this.Interval)
          this.codetitle = '重新获取'
          this.timeout = 60
        }
      }, 1000)
    }
  },
  beforeRouteUpdate (to, from, next) {
    clearInterval(this.Interval)
    next()
  }
}
</script>

<style lang="scss" scoped>
  .login{
    width: 100%;
    li{
      width: 100%;
      height: 120px;
      line-height: 92px;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      button{
        width: 100%;
        height: 100%;
      }
      input{
        border: 0;
        flex:7
      }
      button{
        border: 1px solid $base-color;
        color: $base-color;
        min-width: 130px;
        padding: 10px 15px;
        // flex:3;
        // text-align: center;
        border-radius: 16px;
        height: 70.4px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
      }
    }
  }
</style>

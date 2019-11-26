<template>
  <div class="location" :class="{'active':searchdata.tips}">
    <Head/>

    <ul class="list">
      <li v-for='(item,index) of searchdata.tips' :key="index" @click="selectCity(item.district)">
        <h3 v-html="item.name"></h3>
        <p v-html="item.district"></p>
      </li>
    </ul>

  </div>
</template>

<script>
import Head from '../address/head'
import storage from '@/utils/storage'
export default {
  data () {
    return {
      searchdata: {}
    }
  },
  watch: {

  },

  methods: {
    selectCity (city) {
      this.$router.go(-1)
      let lala = storage.getItem('addressList')
      lala.address = city
      storage.setItem('addressList', lala)
    },
    addtheaddress () {
      this.$router.push({
        path: '/addtheaddress'
      })
    }
  },
  components: {
    Head
  }
}
</script>

<style lang="scss" scoped>
  .location{
    width: 100%;
    height: 100%;
    background-color: #f9faf7;
    &.active{
      background-color: rgba(0,0,0,.2);
    }
    position: relative;
  }

  .currentPosition{
    width: 100%;
    height: 88px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px 0 40px;
    background-color: #fff;
    i{
      font-size: 32px;

    }
  }
  .list{
    width: 100%;
    height: auto;
    position: absolute;
    top: 88px;
    background-color: #fff;
    li{
      width: 100%;
      height: 138.8px;
      padding: 10px 80px 10px 10px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      h3,p{
        flex:1;
        display: flex;
        align-items: center;
      }
    }
  }
  .bottom{
    width: 100%;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $base-color;
    font-size: 28px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    i{
      color: $base-color;
      font-size: 28px;
    }
  }
  .content{
    width: 100%;
    height: calc(100vh - 284px);
    display: flex;
    justify-content: center;
    align-items: center;
    .nothing{
      width: 100%;
      height: 151.76px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img{
        width: 200px;
        height: 60%;
        display: inline-block;
        display: flex;
        margin: auto;
      }
      p{
        width: 100%;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items:center;
      }
    }
  }
</style>

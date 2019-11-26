<template>
  <div class="location" :class="{'active':searchdata.tips}">
    <Head/>
    <div class="currentPosition">
      <i class="iconfont icon-dingwei1"></i>
      <p>定位到当前地址</p>
    </div>
    <ul class="list">
      <li v-for='(item,index) of searchdata.tips' :key="index" @click="selectCity(item.district)">
        <h3 v-html="item.name"></h3>
        <p v-html="item.district"></p>
      </li>
    </ul>
    <div class="content">
      <div class="nothing" v-if="List.length<=0">
        <img src="http://img.dmallcdn.com/common/ea483fae-ca6d-4a26-9da3-ce0f0b3f770c" alt="">
        <p>您还没有收货地址哦！</p>
      </div>
      <ul class="addresslist" v-else>
        <li style="background:#f9faf7;height:40px;lineHeight:40px">历史地点</li>
        <li v-for="(item,index) of List" :key="index">
          <input type="checkbox" :checked="pitch(item.pitch)" @change="changeselect(item.id,item.pitch,item.indetails)">
          <div>
            <span>{{item.username}}</span>
            <span>{{item.tel}}</span>
            <span>{{item.indetails}}</span>
          </div>
          <div class="iconfont icon-bianji1" style="fontSize:16px" @click="$router.push({path:'/addtheaddress',query:{isShow:true,id:item.id}})"></div>
        </li>
      </ul>
    </div>
    <div class="bottom" @click="addtheaddress">
      <i class="iconfont icon-jia"></i> 新增地址
    </div>
  </div>
</template>

<script>
import Head from './head'
import storage from '@/utils/storage'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      searchdata: {}
    }
  },
  created () {
    if (!localStorage.getItem('info')) {
      this.$message.error('请先登录')
    }
    this.getAddress()
  },
  watch: {

  },
  mounted () {

  },
  methods: {
    ...mapActions('addresss', ['getAddress']),
    changeselect (id, pitch, indetails) {
      if (+pitch) {
        this.$api.address.updateaddress(id, {pitch: '0'}).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
        })
      } else {
        this.$api.address.updateaddress(id, {pitch: '1'}).then(res => {
          if (res.code === 1) {
            this.$message.success(res.msg)
          }
        })
      }
      storage.setItem('location', indetails)
      this.$router.go(-1)
    },
    selectCity (city) {
      this.$router.push({
        path: '/home'
      })
      storage.setItem('location', city)
    },
    addtheaddress () {
      this.$router.push({
        path: '/addtheaddress'
      })
    },
    pitch (id) {
      if (Number(id)) {
        return true
      } else {
        return false
      }
    }
  },
  components: {
    Head
  },
  computed: {
    ...mapState(['info']),
    ...mapState('addresss', ['List'])
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
    // justify-content: center;
    // align-items: center;
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
    .addresslist{
      width: 100%;
      height: 100%;
      li{
        background-color: #fff;
        display: flex;
        height: 160.8px;
        align-items: center;
        padding: 20px 10px;
        input{
          width: 20%;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          display: block;
        }
        div{
          width: 60%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          span{
            width: 100%;
            height: 33.333333%;
            font-size: 32px;
            &:nth-child(3),&:nth-child(2){
              font-size: 28px;
              color: grey;
            }
          }
          &:nth-child(3){
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

          }
        }
      }
    }
  }
</style>

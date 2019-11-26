<template>
  <div class="addtheaddress">
    <login-head>
      <i @click="goback" class="iconfont icon-zuojiantou-01"></i>
      <span>编辑地址</span>
    </login-head>
    <ul class="list">
      <li>
        <span>联系人</span>
        <input type="text" name="" id="" placeholder="请输入联系人" v-model="information.username">
      </li>
      <li>
        <span>手机号</span>
        <input type="text" name="" id="" placeholder="请输入手机号" v-model="information.tel">
      </li>
      <li>
        <span>地址</span>
        <select>
          <option value="啊">啊</option>
        </select>
        <input @click="gotocity" type="text" name="" id="" placeholder="请输入地址" v-model="information.address">
      </li>
      <li>
        <span>详细地址</span>
        <input type="text" name="" id="" placeholder="请输入详细地址" v-model="information.indetails">
      </li>
      <li v-if="btn"><Button class="btn" @click="affirm">完成</Button></li>
      <li v-else style="display:flex;"><Button style="flex:1;height:100%" @click="deleteAddress">删除</Button><Button style="flex:1;height:100%">完成</Button></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import storage from '@/utils/storage'
export default {
  data () {
    return {
      information: {
        username: '',
        tel: '',
        address: '',
        indetails: ''
      }
    }
  },
  watch: {
    'information.username' () {
      storage.setItem('addressList', this.information)
    },
    'information.tel' () {
      storage.setItem('addressList', this.information)
    },
    'information.address' () {
      storage.setItem('addressList', this.information)
    },
    'information.indetails' () {
      storage.setItem('addressList', this.information)
    }
  },
  computed: {
    ...mapState(['info']),
    btn () {
      if (this.$route.query.isShow) {
        return false
      }
      return true
    }
  },
  created () {
    this.information = storage.getItem('addressList')
  },

  methods: {
    goback () {
      this.$router.go(-1)
    },
    affirm () {
      if (!this.information.username || !this.information.tel || !this.information.address || !this.information.indetails) {
        this.$message.error('不能为空')
      } else {
        this.$api.address.insertaddress({...this.information, user_id: this.info.data.id}).then(res => {
          if (res.code === 1) {
            this.$router.back()
          }
        })
      }
    },
    gotocity () {
      this.$router.push('/selectcity')
    },
    deleteAddress () {
      const {id} = this.$route.query
      this.$api.address.deleteaddress(id).then(res => {
        if (res.code === 1) {
          this.$router.back()
        }
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log('我是离开的那个钩子函数', to.path)

    if (to.path !== '/selectcity') {
      localStorage.removeItem('addressList')
    }

    next()
  },
  destroyed () {

  }
}
</script>

<style lang="scss" scoped>
.addtheaddress{
  width: 100%;
}
.list{
  width: 100%;
  li{
    width: 100%;
    height: 88px;
    display:flex;
    justify-content: center;
    align-items: center;
    span{
      width: 30%;
      height: 100%;
      display: block;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    input{
      width: 70%;
      height: 100%;
      display: block;
      border:0
    }
    .btn{
      width: 100%;
      height: 100%;
    }
  }
}
</style>

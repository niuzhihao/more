<template>
  <div class="unfold-site">
    <div @click="changesite">
      <span>可选用地址</span>
      <span>共1个<i class="iconfont icon-youjiantou-01"></i></span>
    </div>
    <Form ref='mua' :model='formValidate' :rules="ruleValidate" >
      <Formitem
        label="联系人"
        prop="user"
        type="text"
        :name="formValidate.user"
        v-model="formValidate.user"
      >
      </Formitem>
      <Formitem
        label="手机号"
        prop="phone"
        type="text"
        v-model="formValidate.phone"
        :name="formValidate.phone"

      >
      </Formitem>
      <Formitem
        label="地址"
        prop="site"
        type="text"
        :name="formValidate.site"
        v-model="formValidate.site"
      >
      </Formitem>
      <Formitem
        label="详细地址"
        prop="site"
        type="text"
        :name="formValidate.detailsite"
        v-model="formValidate.detailsite"
        :isshang="isshang"
        @click="lala"
      >
      </Formitem>
    </Form>

  </div>
</template>

<script>
import Form from '@/components/from/Form'
import Formitem from '@/components/from/Form-item'
export default {
  props: {
    userInfo: {
      type: Object,
      default: () => {}
    },
    phone: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      formValidate: {
        user: '',
        phone: '',
        site: '',
        detailsite: ''
      },
      isshang: true,
      ruleValidate: {
        user: [{required: true, message: '用户名不能为空'}],
        phone: [{required: true, message: '手机号不能为空'}]
      }
    }
  },
  created () {
    this.formValidate.user = this.userInfo.username
    this.formValidate.phone = this.phone
    this.formValidate.site = this.userInfo.address
    this.formValidate.detailsite = this.userInfo.indetails
  },
  methods: {
    lala (data) {
      this.$emit('click', data)
    },
    changesite () {
      this.$emit('change')
    }

  },
  components: {
    Form,
    Formitem
  }
}
</script>

<style lang="scss" scoped>
.unfold-site{
  width: 100%;
  div{
    width: 100%;
    height: 90.8px;
    display: flex;
    padding: 22px 30px;
    @include setBottomBorder(#ccc);
    background-color: #fff;
    span{
      flex:7;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      &:nth-child(2){
        flex:3;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
    }
  }
  .dialog{
    width: 100%;
    height: 70vh;
  }
}
</style>

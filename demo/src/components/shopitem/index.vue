<template>
  <li :class="type==='long'?'long':'wide'" @click='clickItem'>
      <img :src="item.cover" alt="">
      <!-- <img :src="item.imgsmall" alt=""> -->
      <div>
        <i v-if="type==='long'">会员价</i><i v-if="type==='long'">48赠2带粉丝</i>
        <p v-text="item.name"></p>
        <i v-if="type==='wide'">会员价</i><i v-if="type==='wide'">48赠2带粉丝</i>
        <del v-if="type==='long'" v-text="item.offPrice"></del>
        <br/>
        <span v-text="item.price"></span>
        <del v-if="type==='wide'" v-text="item.offPrice"></del>
        <span @click.stop="addCart">+</span>
      </div>
  </li>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'long'
    },
    item: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    clickItem () {
      this.$emit('click')
    },
    addCart () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss" scoped>
.long{
  width: 33.33333333%;
  height: 446.10px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  z-index: 222;
  overflow: hidden;
  // transform: scaleX(.5);
  border: 1px solid #ccc;
  @include setBottomBorder(#ccc);
  // @include setRightBorder(#ccc);
  img:nth-child(1){
    width: 100%;
    height: 45%;
    border:0
  }
  img:nth-child(2){
    width: 88%;
    height: 45%;
    position: absolute;
    top: 0;
  }
  div{
    width: 100%;
    height: 45%;
    position: relative;
    i{
      background-color: $base-color;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      font-style: normal;
      margin-left: 5px;
    }
    p{
      // flex:4
      width: 100%;
      height: 60px;
      margin: 15px 0;
    }
    del{
      color: $default-shop-color;
      font-size: 24px;
      display: block;
      margin-top: 15px;
    }
    span{
      color: $base-color;
      font-size: 34px;
      &:last-child{
        position: absolute;
        right: 0;
        border: 1px solid $base-color;
      }
    }
  }
}
.wide{
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
  img{
    width: 30%;
    height: 100%;
    &:nth-child(2){
      position: absolute;
      left: 0;
    }
  }
  div{
    width: 70%;
    height: 100%;
    position: relative;
    line-height: 50px;
    i{
      background-color: $base-color;
      color: #fff;
      font-size: 18px;
      font-weight: 800;
      font-style: normal;
      margin-left: 5px;
      // display: block;
    }
    p{
      // flex:4
      margin-top: 0.3rem;
    }
    del{
      color: $default-shop-color;
      font-size: 24px;
    }
    span{
      font-size: 40px;
      font-weight: 800;
      &:last-child{
        position: absolute;
        right: 60px;
        background-color: $base-color;
        color: #fff;
        width: 60px;
        height: 50px;
        line-height: 50px;
        text-align: center;
      }
    }
  }
}
</style>

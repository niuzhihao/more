<template>
  <ul class="list">
    <li class="list-item" v-for="(item,index) of data" :key="index">
      <img :src="item.icon" alt="">
      <span>{{item.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .list-item{
    width: 20%;
    height: 152px;
    display: flex;
    flex-direction: column;
    img{
      width: 100%;
      height: 70%;
      display: block;
    }
    span{
      width: 100%;
      height: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $default-shop-color;
    }
  }
}
</style>

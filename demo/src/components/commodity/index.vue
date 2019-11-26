<template>
  <div class="shop">
    <div class="top">
      <img :src="src" alt="">
    </div>
    <ul class="list">
      <shop-item v-for="(item,index) of data" :key="index" :item="item" @click="gotoDetails(item.id)" @change="addCart(item.id)"></shop-item>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    gotoDetails (id) {
      this.$router.push('/details/' + id)
    },
    addCart (id) {
      this.$api.shop.insertshop(id).then(res => {
        this.$message.success(res.msg)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.shop{
  width: 100%;
  .top{
    width: 100%;
    height: 180.08px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .list{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>

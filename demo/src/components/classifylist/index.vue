<template>
<div ref='con'>
  <ul>
    <li v-for="(item,index) of data" :key="index" @click="change(index)" :class="{'active':listIndex===index}">{{item.title}}</li>
  </ul>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      listIndex: 0,
      scroll: {}
    }
  },
  methods: {
    change (index) {
      this.listIndex = index
      this.$emit('clickList', index)
    }
  },
  mounted () {
    // eslint-disable-next-line no-new
    new BScroll(this.$refs.con, {
      click: true
    })
  }
}
</script>

<style lang="scss" scoped>
ul{
  background-color: $list-bgc-color;
}
  li{
    width: 100%;
    height: 112px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $list-text-color;
    &.active{
      color:$active-color;
      background-color: #fff;
      font-weight: 800;
    }
  }
</style>

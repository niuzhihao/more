<template>
  <div ref='memeda'>
    <div :class="{'widTwo':wid,'home-nav':wid===false}">
      <a href="javascript:;"
      :class="{'active':index===navIndex}"
      v-for="(item,index) of menu"
      :key="index" @click="change(index)">{{item.title}}</a>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      navIndex: 0,
      scroll: {}
    }
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    },
    Index: {
      type: Number,
      default: 0
    },
    wid: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.srcoll = new BScroll(this.$refs.memeda, {
        click: true,
        scrollX: true,
        eventPassthrough: 'vertical'
      })
    })
  },
  watch: {
    Index (index) {
      this.navIndex = index
    }
  },
  methods: {
    change (index) {
      this.navIndex = index
      this.$emit('change', index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/index.scss';
.widTwo{
  width: 200%;
  height: 80px;
  display: flex;
  align-items: center;
  a{
      width: auto;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;
      margin: 0 10px;
      &.active{
        color:$base-color;
      }
  }
}
.home-nav{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  a{
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #666;
      &.active{
        color:$base-color;
      }
  }
}
</style>

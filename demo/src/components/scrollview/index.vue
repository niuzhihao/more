<template>
  <div class="scrollview" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    pullup: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      scroll: {}
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })

    if (this.pullup) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.$emit('scrollBottom')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollview{
  overflow: hidden;
}
</style>

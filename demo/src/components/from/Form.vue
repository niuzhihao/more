<template>
    <form class="box" @click="clickform">
        <slot></slot>
        <div class="line"></div>
    </form>
</template>

<script>
export default {
  name: 'Form',
  props: {
    model: {
      type: Object,
      default: () => {}
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    verification () {
      return new Promise((resolve, reject) => {
        const rule = this.rules
        const model = this.model
        for (let k in rule) {
          if (model[k] !== undefined) {
            if (model[k]) {
              resolve(model)
            } else {
              reject(rule[k][0].message)
            }
          }
        }
      })
    },
    clickform () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.box{
  position: relative;
}
.line{
  width: 100%;
  height: 2.5px;
  margin: 0,0,20px;
  background:url('../../assets/images/shoppingline.png');
  background-size: auto 4px;
  box-sizing: inherit;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>

<template>
    <button
    :class="{'primary':type==='primary',
    'success':type==='success',
    'info':type==='info',
    'warning':type==='warning',
    'danger':type==='danger',
    'medium':size==='medium',
    'small':size==='small',
    'mini':size==='mini',
    'round':round,
    'circle':circle
    }"
    :disabled="disabled"
    @click="memeda"
    ><slot></slot></button>
</template>

<script>
export default {
  props: {
    size: String, // 按钮大小
    type: String, // 按钮类型
    round: Boolean, // 是否圆角      默认false
    circle: Boolean, // 是否是园的按钮        默认false
    disabled: Boolean // 是否禁用      默认false
  },
  methods: {
    memeda () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
    button{
        width: 80px;
        height: 30px;
        border: 1px solid #ccc;
        background-color: #fff;
        color: #666
    }
    .primary{
        background-color: #409eff;
        color: #fff;
    }
    .success{
        background-color: #67c23a;
        color: #fff;
    }
    .info{
        background-color: #909399;
        color: #fff;
    }
    .warning{
        background-color: #e6a23c;
        color: #fff;
    }
    .danger{
        background-color: #f56c6c;
        color: #fff;
    }
    .medium{
        width: 70px;
        height: 28px;
    }
    .small {
        width: 60px;
        height: 25px;
    }
    .mini{
        width: 50px;
        height: 22px;
    }
    .round{
        border-radius: 5px;
    }
    .circle{
        width: 50px;
        height: 50px;
        border-radius: 50%
    }
</style>

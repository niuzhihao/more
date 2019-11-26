<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 32px;
  i{
    position: absolute;
    left: 20px;
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #333;
    color: #fff;
    line-height: 64px;
    text-align: center;
    font-size: 32px;
  }
}
</style>

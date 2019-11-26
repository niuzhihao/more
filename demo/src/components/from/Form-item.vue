<template>
    <div class='memeda'>
        <label v-if="label">{{label}}</label>
        <div>
            <input
            :type="type"
            @input="handleInput"
            :placeholder="placeholder"
            :value='name'
            >
            <i v-if="isshang" @click="lala" class="iconfont icon-xiangshang"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Form-item',
  props: {
    type: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    isshang: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      flag: false
    }
  },
  methods: {
    handleInput (e) {
      const value = e.target.value
      this.$emit('input', value)
    },
    lala () {
      this.$emit('click', false)
    }
  }
}
</script>

<style scoped>
.memeda{
    display: flex;
    position: relative;
}
label{
    color: #666;
    /* width: 30%; */
    flex:2;
    display: flex;
    justify-content: center;
    align-items: center

}
.memeda div{
    flex:8;
    display: flex;
    justify-content: center;
    align-items: center
}
.memeda div input{
    width: 100%;
    height: 40px;
    border: 0;
    outline: none;
}
.memeda::after{
    content:"";
    width: 100%;
    height: 0.1px;
    background-color: #ccc;
    position: absolute;
    bottom: 0;
}
</style>

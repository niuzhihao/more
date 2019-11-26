<template>
  <div>
    {{aaa}}
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {

    }
  },
  created () {
  },
  methods: {

  },
  computed: {
    ...mapState('cart', ['aaa'])
  }
}
</script>

<style lang="scss" scoped>

</style>

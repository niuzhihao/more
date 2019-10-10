<template>
  <div id="app">
    <router-view/>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
  font-size: 34px;
}
</style>

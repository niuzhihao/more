<template>
  <footer class="footer">
    <router-link to='/home'>
      <i></i>
      <span>首页</span>
    </router-link>
    <router-link to='/classify'>
      <i></i>
      <span>列表</span>
    </router-link>
    <router-link to='/cart'>
      <i></i>
      <span>购物车</span>
    </router-link>
    <router-link to='/my'>
      <i></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 100px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    a{
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      i{
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        display: block;
        background-image :url('https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3186729172,796342589&fm=58');
        background-size: 100px 50px;
      };
      span{
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>

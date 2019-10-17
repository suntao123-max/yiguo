<template>
  <div id="app">
    <router-view/>
    <footer @click="color">
      <router-link to="/">
        <img src="/static/images/home/nav_home_selected.png" alt="">
      </router-link>
      <router-link to="/Assortment">
        <img src="/static/images/home/nav_classify.png" alt="">
      </router-link>
      <router-link to="/eat">
        <img src="/static/images/home/nav_eat.png" alt="">
      </router-link>
      <router-link to="/shopcart">
        <img src="/static/images/home/nav_list.png" alt="">
      </router-link>
      <router-link to="/individualcenter">
        <img src="/static/images/home/nav_user_active.png" alt="">
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  methods:{
    color:()=>{
      console.log()
    }
  }
}
</script>

<style scoped lang="less">
  footer {
    border-top:1px solid #3333;
    position:fixed;
    bottom:0;
    height:60px;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content: space-around;
    display:fixed;
    background-color:#fff;
    z-index:10;
    img {
      height:2.2rem;
      width:3rem;
    }
  }
</style>
<style> 
  *{
    margin:0;
    padding:0;
  }
  ul,ol,li{
    list-style-type:none;
  }
  a{
    text-decoration:none;
    color:#333;
  }
  .router-link-active{
    color:#16bb7d;
  }
</style>

<template>
  
  <div class="chooseCityBox"> 
    <div class="box">
      <span>选择城市</span>
      <choose-city></choose-city> 
      <button type="button" @click='isTrue'>确定</button>
    </div> 
  </div>
</template>

<script>
import chooseCity from './chooseCity'
export default {
  name: 'HelloWorld',
  data () {
    return {
     
    }
  },
  methods:{
  	isTrue:function(){
  		window.location.href = '/#/'
  	}
  },
  components: {chooseCity}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .chooseCityBox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 50px;
    box-shadow: #ccc 0px 0px 50px 2px; 
  }
  button{
  	position:fixed;  	
  	top:30%;
  	left:50%;
  	transform:translate(-50%);
  	width:80px;
	height:30px;
	background-color:#fff;
	color:#008842;
	border:1px solid currentColor;
	border-radius:5px;
  }
</style>
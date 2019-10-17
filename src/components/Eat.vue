<template>
	<div class="eat">
		<ul class="header">
			<li>
				<img src="/static/images/eat/586030925119660372_120x96.png" alt="">
				<p>做美食</p>
			</li>
			<li>
				<img src="/static/images/eat/586030925119693140_120x96.png" alt="">
				<p>涨知识</p>
			</li>
			<li>
				<img src="/static/images/eat/586030925119725908_120x96.png" alt="">
				<p>生活家</p>
			</li>
			<li>
				<img src="/static/images/eat/586030927703745073_120x96.png" alt="">
				<p>爱试吃</p>
			</li>
		</ul>
	  <ul class="main"
	  		v-infinite-scroll="load"
	  		infinite-scroll-disabled="disabled"
	  		infinite-scroll-immediate="false"
	  		infinite-scroll-distance="0"
	  		>
	  	<li v-for="(v,i) in item"  :key="i">
		  	<router-link to="">
		  		<img v-lazy="v.src" alt="">
		  		<p v-text="v.name"></p>
		  		<div class="title" v-text='v.title'></div>
		  		<div class="watch" v-text><i class="el-icon-view"></i>{{v.watch}}</div>
		  		<div class="span">
		  			<span class="a"><img src="/static/images/eat/153403926872008459_640.jpg" alt="">易果君</span>
		  			<span class="date" v-text="v.date"></span>
		  		</div>
		  	</router-link>
		  </li>
		  <li v-for="i in item1"  class="main">
		  	<router-link to="">
		  		<img src="/static/images/eat/153403925992416933_900x383.jpg" alt="">
		  		<p>生猛鲜活的波士顿大龙虾，享受来自北大西洋的饕餮盛宴！</p>
		  		<div class="title">做美食</div>
		  		<div class="watch" v-text><i class="el-icon-view"></i>21405</div>
		  		<div class="span">
		  			<span class="a"><img src="/static/images/eat/153403926872008459_640.jpg" alt="">易果君</span>
		  			<span class="date">
		  				2019年5月5日
		  			</span>
		  		</div>
		  	</router-link>
		  </li>
			 <p v-if="loading"
			 		v-loading="loading"
    			element-loading-text="拼命加载中"
    			element-loading-spinner="el-icon-loading"
    			element-loading-background="rgba(0, 0, 0, 0.8)"
    			class="load"
			  	></p>
	     <p v-if="noMore">没有更多了</p>
	  </ul>
	</div>
</template>

<script>
  export default {
  data () {
      return {
        item:[
        	{src:'/static/images/eat/153403927062390557_900x383.jpg',name:'想不到麻豆文旦竟然是这样的寓意',title:'生活家',watch:'19955',date:'2019年08月29日'},
        	{src:'/static/images/eat/153403926872106763_900x383.jpg',name:'来自四川雅江的珍馐美馔，被日本人推崇的真相！',title:'生活家',watch:'19165',date:'2019年08月11日'},
        	{src:'/static/images/eat/153403926871189259_900x383.jpg',name:'可以吃的“雅诗兰黛”→ 红钻突尼斯软籽石榴，吃起来不用吐籽！',title:'生活家',watch:'21354',date:'2019年08月11日'},
        	{
	      		src:'/static/images/eat/153403925992416933_900x383.jpg',name:'生猛鲜活的波士顿大龙虾，享受来自北大西洋的饕餮盛宴！',title:'做美食',watch:'21405',date:'2019年5月5日'
	      	}
        ],
        item1:0,
        loading: false
      }
      
    },
    computed: {
      noMore () {
        return this.item1 >= 5
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
      	this.loading = true
        setTimeout(() => {
          this.item1 += 2
          this.loading = false
        }, 800)
      }
    }
  }
</script>

<style scoped lang="less"> 
	.eat{
		background-color:#f1f3f4;
		height:99vh;
		width:100%;
		overflow-x:hidden;
		.header{
			padding:1rem;
			display:flex;
			justify-content:space-around;
			background-color:#fff;
			li{
				display:flex;
				flex-direction:column;
				align-items:center;
				img{
					width:5rem;
				}
			}
		}
		.main{
			margin-bottom:60px;
			li{
				background-color:#fff;
				margin:1rem 0;
				padding:1rem;
				position:relative;
				white-space:nowrap;
				img{
					width:100%;
				}
				.title,.watch{
					color:#fff;
					position:absolute;
					top:2rem;
					white-space:nowrap;
					padding:0 .3rem 0 .2rem;
					border-top-right-radius:.7rem;
					border-bottom-right-radius:.7rem;
					background-color:#ff752f;
				}
				.watch{
					right:0;
					margin:0 1rem;
					color:#3337;
					border-top-left-radius:.7rem;
					border-bottom-left-radius:.7rem;
					background-color:#fef4ec;
				}
				p{
					color:black;
				}
				.span{
						display:flex;
						width:100%;
						justify-content:space-between;
						align-items:center;
					.a{
						position:relative;
							top:-9px;
					}
					span{
						color:#3337;
						img{
							width:34px;
							position:relative;
							top:12px;
						}
					}
				}
			}
		}
	}
	.load{
		width:100vw;
		height:100vh;
		position:fixed;
		top:0;
		left:0;
		z-index:1;
	}
</style>
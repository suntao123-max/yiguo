<template>
	<div class="assortment">
		<div class="search">
				<el-input
			    placeholder="请输入内容"
			    prefix-icon="el-icon-search"
			    v-model="input"
			    clearable>
			  </el-input>
		  	<router-link to="">
		  		<span>搜索</span>
		  	</router-link>
		</div>
		<div class="text">
			<ul class="menu">
				<router-link to="/assortment/importedfruit"><li>进口水果</li></router-link>
				<router-link to="/assortment/domesticfruit"><li>国产水果</li></router-link>
				<router-link to="/assortment/meat"><li>精选肉类</li></router-link>
				<router-link to="/assortment/egg"><li>禽类蛋品</li></router-link>
				<router-link to="/assortment/seafood"><li>海鲜水产</li></router-link>
				<router-link to="/assortment/cooking"><li>即烹美食</li></router-link>
				<router-link to="/assortment/dairypastry"><li>乳品糕点</li></router-link>
				<router-link to="/assortment/freshvegetables"><li>新鲜蔬菜</li></router-link>
				<router-link to="/assortment/fastfood"><li>方便速食</li></router-link>
				<router-link to="/assortment/chandlery"><li>粮油杂货</li></router-link>
				<router-link to="/assortment/drink"><li>食品饮料</li></router-link>
				<router-link to="/assortment/giftcertificate"><li>礼品礼券</li></router-link>
			</ul>
			<ul class="context">
				<li>
					<router-view/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		 data() {
      return {
        tabPosition: 'left',
        input:''
      };
    }
	}
</script>

<style scoped lang="less">
	.assortment{
		position:absolute;
		.search{
			position:fixed;
			background-color:#fff;
			width:100%;
			top:0;
			display:flex;
			justify-content:space-around;
			align-items:center;
			border-bottom:1px solid #3333;
			.el-input{
				width:60%;
				margin:.6rem;
			}
		}
		.text{
			display:flex;
			.menu{
				position:absolute;
				top:60px;
				z-index:-1;
				width:6em;
				overflow-y:auto;
				display:flex;
				flex-direction:column;
				align-items:center;
				margin-bottom:60px;
				li{
					text-align:center;
					height:70px;
					width:6em;
					line-height:70px;
					background-color:#f4f4f4;
				}
				.router-link-active{
					border-left:3px solid #11b57c;
					color:#11b57c;
					li{
						background-color:#fff;
					}
				}
			}
			.context{
				position:fixed;
				top:60px;
				right:0;
				width:100%;				
				height:100%;
				overflow:auto;
				z-index:-2;
			}
		}
	}
</style>
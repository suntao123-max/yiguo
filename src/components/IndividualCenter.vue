<template>
	<div class="user">
		<header>
			<div class="bgc">
				<router-link to="/set"><i class="el-icon-setting"></i></router-link>
				<router-link to="/login">
					<span>
						<img src="/static/images/user/no-pic.jpg" alt="">
					</span>
					<div>登录/注册</div>
				</router-link>
			</div>
			<div class="coin">
				<div>
					<b class="color">—</b>
					<span>卡包余额</span>
				</div>
				<div>
					<b class="color">—</b>
					<span>悠币</span>
				</div>
			</div>
		</header>
		<section>
			<ul class="orderForm">
				<li>
					<img src="/static/images/user/unpaid.png" alt="">
					<span>待支付</span>
				</li>
				<li>
					<img src="/static/images/user/take.png" alt="">
					<span>待收货</span>
				</li>
				<li>
					<img src="/static/images/user/evaluate.png" alt="">
					<span>评价送悠币</span>
				</li>
				<li>
					<img src="/static/images/user/changing.png" alt="">
					<span>在线退换货</span>
				</li>
				<li class="unique">
					<img src="/static/images/user/allorder.png" alt="">
					<span>全部订单</span>
				</li>
			</ul>
			<ul class="module">
				<li v-for="(v,i) in items" :key=i>
					<img :src="v.src" alt="">
					<span v-text="v.name"></span>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				items:[
					{src:'/static/images/user/coupons.png',name:'优惠券'},
					{src:'/static/images/user/yellowcard.png',name:'充值卡'},
					{src:'/static/images/user/delivery.png',name:'礼品兑换券'},
					{src:'/static/images/user/address.png',name:'收货地址'},
					{src:'/static/images/user/help.png',name:'帮助中心'},
					{src:'/static/images/user/box@3x.png',name:'我的团购'},
					{src:'/static/images/user/account-icon.png',name:'账户余额'},
					{src:'/static/images/user/service.png',name:'在线客服'}
				]
			}
		}
	}
</script>

<style scoped lang="less">
	.user{
		overflow-y:auto;
		background-color:#f4f4f4;
		height:100vh;
		header{
			.bgc{
				width:100%;
				height:10rem;
				overflow:hidden;
				background-image:url(/static/images/user/bgimg.jpg);
				background-size:100% 150%;
				i{
					position:absolute;
					right:0;
					transform:scale(1.5) translate(-50%,50%);
					color:#fff9;
				}
				span{
					display:inline-block;
					border-radius:50%;
					transform:scale(.55);
					border:5px solid #dbece190;
					img{
						border-radius:50%;
						transform:scale(.98) translate(0,1%);
					}
				}
				div{
					color:#fff;
					position:relative;
					top:-6rem;
					left:150px;
					font-size:1.2rem;
				}
			}
			.coin{
				display:flex;
				height:70px;
				background-color:#fff;
				justify-content:space-around;
				div{
					display:flex;
					flex-direction:column;
					align-items:center;
					justify-content:center;
					background-color:#fff;
					.color{
						color:#13b67c;
						transform:scaleX(.6)
					}
				}
			}
		}
		section{
			.orderForm{
				margin-top:2rem;
				display:flex;
				justify-content:space-around;
				background-color:#fff;
				font-size:.5rem;
				.unique{
					background-image:url(/static/images/user/xian.png);
					background-repeat:no-repeat;
					background-size:1em 6rem;
				}
				li{
					height:6rem;
					width:6rem;
					display:flex;
					flex-direction:column;
					justify-content:center;
					align-items:center;
					img{
						padding:.3rem;
						height:1.5rem;
						width:1.6rem;
					}
				}
			}
			.module{
				margin:2rem 0 5rem 0;
				display:flex;
				flex-wrap:wrap;
				background-color:#fff;
				li{
					width:25%;
					display:flex;
					padding:2rem 0 1rem 0;
					border-bottom:1px solid #3332;
					flex-direction:column;
					align-items:center;
					font-size:.5rem;
					img{
						padding:.3rem;
						width:2.5rem;
						height:2.5rem;
					}
				}
			}
		}
	}
</style>
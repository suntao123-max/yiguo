<template>
	<div class="shopCart">
		<div class="notlogin">
			<div class="login" v-if='user==""'>
				登陆可同步购物车内商品
				<router-link tag="button" to="">登陆</router-link>
			</div>
			<div class="post">全场满一百包邮，还差<span v-text="postal"></span>元包邮</div>
		</div>
		<ul class="car">
			<li v-if='item==""'>
				<img src="/static/images/shopCart/img_nogoods@3x.png" alt="">
			</li>
			<li class="content" v-for="(v,i) in item" :key="i">
				<input type="checkbox" class="chk" :checked="v.isCheck" @click="chk(v,i)">
				<img v-lazy="v.src" alt="">
				<div class="txt">
					<p v-text="v.genre" class="genre"></p>
					<p v-html="v.price" class="price"></p>
				</div>
				<i class="del" @click="del(v)"></i>
				<div class="pro">
					<input type="button" value="-">
					{{v.proNum}}
					<input type="button" value="+">
				</div>
				
			</li>
			<div class="box"></div>
		</ul>
		<ul class="balance">
			<li class="check">
				<input type="checkbox" @click="checkAll" :checked="pitchOn" :disabled="chkAll" id="all">
				<label for="all">全选</label>
			</li>
			<li>
				<div class="reckon">
					<p>合计(不含运费)： <span class="red">&yen;{{count}}</span></p>
					<p>已优惠： <span>&yen;0.00</span></p>
				</div>
				<button type="button" :class='{"gray":arr.length>0?false:true}'>去结算<span v-if="arr.length>0">({{arr.length}})</span></button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				item:[],
				chkAll:true,
				pitchOn:false,
				count:"0.00",
				postal:'100.00',
				user:'',
				arr : []
			}
		},
		watch:{
			item:function(v){
				if(v==""){
					this.chkAll=true
					this.pitchOn=false
				}else{
					this.chkAll=false
					this.pitchOn=true
				}
			}
		},
		mounted:function(){
			let item = JSON.parse(localStorage.getItem('id'))
			for(var i = 0 ;i < item.length;i++){
				for(var j = item.length-1 ; j > i ; j--){
					if(item[i].id==item[j].id){
						item.splice(j,1)
						item[i].proNum++
					}
				}
			}
			this.item = item
			for(var i in item){
				if(item[i].isCheck){
					this.arr.push(item[i])
				}
			}
		},
		updated:function(){
			let arr = this.arr,num = 0;
			for(let k in arr){
				num += parseFloat(arr[k].price.slice(5,))
			}
			if(num>=100){
				this.postal="0.00"
			}else{
				this.postal = (100 - num).toFixed(2)

			}
			this.count = num.toFixed(2);
		},
		methods:{
			chk:function(v,i){
				v.isCheck=!v.isCheck
				if(v.isCheck==true){
					this.arr.push(v)
					let arr = this.arr;
					let  num = 0;
					for(let k in arr){
						num += parseFloat(arr[k].price.slice(5,))
					}
					this.count = num.toFixed(2);
				}else{
					let arr = this.arr
					for(let i in arr){
						if(v==arr[i]){
						let arr2 = arr.slice(i, i+1)
							arr.splice(i,1)
							let num = 0;
							for(let n in arr){
								num += parseFloat(arr[n].price.slice(5,));
							}
							this.count = num.toFixed(2);
						}
					}
				}
			},
			checkAll:function(){
				
			},
			del:function(v){
				let r = confirm("你确定删除吗？")
				if(r == true){
					let arr = JSON.parse(localStorage.getItem('id'))
					for(let i in arr){
						if(v.id==arr[i].id){
							arr.splice(i,1)
							localStorage.setItem('id',JSON.stringify(arr))
						}
						this.item = arr;
					}
				}
				if(r == true){
					let array = this.arr
					for(let s in array){
						if(v.id == array[s].id){
							array.splice(s,1)
						}
					}
				}
			}
		},
	}
</script>

<style scoped lang="less">
	.shopCart{
		height:100vh;
		.car{
			position:fixed;
			top:60px;
			width:100vw;
			height:100vh;
			overflow:auto;
			z-index:0;
			margin-bottom:120px;
			.box{
				height:200px;
				width:100%;
			}
			.content{
				display:flex;
				align-items:space-around;
				position:relative;
				.chk,img{
					align-self:center;
				}
				.del{
					display:inline-block;
					width:20px;
					height:20px;
					background-image:url("/static/images/shopCart/del.png");
					background-repeat:no-repeat;
					background-size:20px 20px;
					position:absolute;
					top:25%;
					transform:translateY(-50%);
					right:0;
				}
				.pro{
					input{
						width:20px;
						height:20px;
						background-color:#fff;
						border:1px solid gray;
					}
					position:absolute;
					top:75%;
					transform:translateY(-50%);
					right:0;
				}
				.txt{
					display:flex;
					flex-direction:column;
					justify-content:space-around;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow:hidden;
					p{
						width:100%;
						white-space:nowrap;
						text-overflow:ellipsis;
						overflow:hidden;
					}
					.price{
						color:red;
					}
				}
				img{
					width:20%;
					border:1px solid #3333;
					border-radius:50%;
					margin:0 10px;
				}
			}
			li{
				margin:10px;
				img{
					width:100%;
					height:100%;
					transform:scale(.7)
				}
			}
		}
		.balance{
			position:fixed;
			bottom:60px;
			width:100%;
			height:60px;
			display:flex;
			justify-content:space-between;
			background-color:#fff;
			align-items:center;
			li{
				display:flex;
				.reckon{
					display:flex;
					flex-direction:column;
					justify-content:space-between;
					align-items:flex-end;
					width:170px;
					height:60px;
					font-size:14px;
					margin-right:6px;
				}
				[type=button]{
					height:60px;
					width:130px;
					outline:none;
					font-size:17px;
					background-color:#fb3d3d;
					border:none;
					color:#fff;
				}
				.gray{
					background-color:#cccccc;
				}
			}
		}
	}
	.red{
		color:red;
	}
	.gray{
		color:gray;
	}
	.notlogin{
		font-size:12px;
		letter-spacing:.3px;
		background-color:#f4f4f4;
		.login{
			padding:.5em 0;
			width:100%;
			color:#808080;
			position:fixed;
			display:flex;
			border-bottom:1px solid #e9d5a7;
			background-color:#fff;
			justify-content:center;
			button{
				border:1px solid #3333;
				font-size:12px;
				background-color:#fff;
				color:#808080;
				margin-left:1em;
				width:3em;
				border-radius:.5em;
				outline:none;
			}
		}
		.post{
			position:fixed;
			padding:.5em 0;
			width:100%;
			background-color:#fff9eb;
			color:#e6c062;
			top:2.7em;
			border-bottom:1px solid #e9d5a7;
			span{
				color:red;
			}
		}
	}
</style>




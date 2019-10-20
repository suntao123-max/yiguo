<template>
	<div class="shopCart">
		<div class="notlogin">
			<div class="login" v-if='user==""'>
				登陆可同步购物车内商品
				<router-link tag="button" to="/login">登陆</router-link>
			</div>
			<div class="login" v-if='user!=""'>已登录，数据已同步</div>
			<div class="post">全场满一百包邮，还差<span v-text="postal"></span>元包邮</div>
		</div>
		<ul class="car">
			<li class="img" v-if='item==""'>
				<img src="/static/images/shopCart/img_nogoods@3x.png" alt="">
				<div>购物车空空如也，快去逛逛吧</div>
				<router-link to="/"><button type="button">去逛逛</button></router-link>
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
					<input type="button" @click="reduce(v)" value="-">
					{{v.proNum}}
					<input type="button" @click="plus(v)" value="+">
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
					this.pitchOn = false
				}else{
					this.pitchOn=true
					this.chkAll=false
				}
			}
		},
		mounted:function(){
			let item = JSON.parse(localStorage.getItem('id'))
			for(var i = 0 ;i < item.length;i++){
				for(var j = item.length-1 ; j > i ; j--){
					if(item[i].id==item[j].id){
						item.splice(j,1)
						item[i].proNum +=1
					}
				}
			}
			this.item = item
			localStorage.setItem('id',JSON.stringify(item))
			for(var i in item){
				if(item[i].isCheck){
					this.arr.push(item[i])
				}
			}
			let user = sessionStorage.getItem('user')
			if(user == null){
				this.user = ''
			}else{
				this.user = user
			}
		},
		updated:function(){
			var array = []
			for(let j in this.item){
				array.push(this.item[j].isCheck)
			}
			if(array){
				if(array.indexOf(false,0) == '-1'){
					this.pitchOn = true
				}else{
					this.pitchOn = false
				}
			}
			let arr = this.arr,num = 0;
			for(let k in arr){
				num += parseFloat(arr[k].price.slice(5,)*arr[k].proNum)
			}
			if(num>=100){
				this.postal="0.00"
			}else{
				this.postal = (100 - num).toFixed(2)
			}
			this.count = num.toFixed(2);
		},
		methods:{
			reduce:function(v){
				if(v.proNum>1){
					v.proNum -=1
				}
			},
			plus:function(v){
				v.proNum +=1
			},
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
				this.arr = [];
				if(this.pitchOn==true){
					this.pitchOn=false;
					let item = this.item
					for(let index in item){
						item[index].isCheck=this.pitchOn;
						if(item[index].isCheck==true){
							this.arr.push(item[index])
							let arr = this.arr;
							let  num = 0;
							for(let k in arr){
								num += parseFloat(arr[k].price.slice(5,))
							}
							this.count = num.toFixed(2);
						}else{
							let arr = this.arr
							for(let i in arr){
								if(item[index]==arr[i]){
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
					}
				}else{
					this.pitchOn=true;
					let item = this.item
					for(let index in item){
						item[index].isCheck=this.pitchOn;
						if(item[index].isCheck==true){
							this.arr.push(item[index])
							let arr = this.arr;
							let  num = 0;
							for(let k in arr){
								num += parseFloat(arr[k].price.slice(5,))
							}
							this.count = num.toFixed(2);
						}else{
							let arr = this.arr
							for(let i in arr){
								if(item[index]==arr[i]){
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
					}
				}
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
				margin:.5rem 1rem;
				padding:0 1rem;
				.chk,img{
					align-self:center;
					transform:scale(.7)
				}
				.chk{
					transform:scale(1)
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
			.img{
				text-align:center;
				position:absolute;
				top:40%;
				left:50%;
				transform:translate(-50%,-50%);
				img{
					transform:scale(.7);
				}
				div{
					margin-top:1rem;
					color:gray;
				}
				button{
					font-size:1.5rem;
					margin-top:1rem;
					width:10rem;
					height:3.2rem;
					background-color:#fff;
					border:1px solid #11b57c;
					border-radius:.5rem;
					color:currentColor;
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




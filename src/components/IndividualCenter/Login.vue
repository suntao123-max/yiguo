<template>
	<div class="login">
		<form action="">
			<ul>
				<li>
					<i class="userName user"></i><input type="text" v-model.trim="userName" placeholder="请输入您的用户名">
				</li>
				<li>
					<i class="userPwd user"></i><input type="text" v-model.trim="userPwd" placeholder="请输入您的密码">
				</li>
				<li class="plug">
						<i></i><input type="text" placeholder="请输入验证码" v-model.trim="code" class="lang">
						<router-view/>
				</li>
			</ul>
			<div>
				<router-link to="/resetPwd">忘记密码？</router-link>
			</div>
			<div class="submit">
				<input type="button" @click="login" value="登录">
				<input type="button" @click="enroll" value="立即注册">
			</div>
		</form>
	</div>
</template>

<script>
	export default{
		data() {
	        return {
	         	userName:'',
	         	userPwd:'',
	         	code:''
	        }
	    },
	    methods:{
	    	enroll:function(){
	    		window.location.href="/#/enroll"
	    	},
	    	login:function(){
	    		if(!this.userName){
	    			alert("请输入用户名")
	    		}else{
	    			if(!this.userPwd){
	    				alert("请输入密码")
	    			}else{
	    				let PWD = localStorage.getItem(this.userName)
	    				if(PWD==this.userPwd){
	    					if(!this.code){
	    						alert("请输入验证码")
	    					}else{
	    						if(this.code=='1234'){
	    							alert("登录成功,为您跳转首页")
	    							sessionStorage.setItem("user",this.userName)
	    							window.location.href = '/'
	    						}else{
	    							alert("验证码错误")
	    						}
	    					}
	    				}else{
	    					alert("用户名或密码错误")
	    				}
	    			}
	    		}
	    		
	    	}
	    }
	}
</script>

<style scoped lang="less">
	a{	
		display:inline-block;
		color:#1fc47f;
		margin:1rem 2em;
	}
	.login{
		height:100vh;
		font-size:16px;
		background-color:#f8f8f8;
		overflow:hidden;
		form{
			margin-top:40px;
			ul{
				border-top:1px solid #3333;
				border-bottom:1px solid #3333;
				background-color:#fff;
				li{
					margin:auto;
					height:60px;
					width:90%;
					border-top:.5px solid #3333;
					i{
						height:20px;
						display:inline-block;
						width:20px;
						position:relative;
						top:5px;
						left:5px;
					}
					.user{
						background-position:50% 50%;
						background-size:16px 16px;
						background-repeat:no-repeat;
					}
					.userName{
						background-image:url(/static/images/login/icon_username.png);
					}
					.userPwd{
						background-image:url(/static/images/login/icon_password.png);
					}
					input{
						font-size:16px;
						height:30px;
						margin:1rem;
						border:none;
						outline:none;
					}
					.lang{
						width:60%;
					}
				}
			}
			.submit{
				width:100%;
				display:flex;
				justify-content:space-around;
				input,[type=button]{
		          border:1px solid #008842;
		          border-radius:5px;
		          width:40%;
		          height:40px;
		          white-space:nowrap;
		          overflow:hidden;
		          text-align:center;
		          line-height:10px;
		          background-color:#fff;
		          background-color:#008842;
		          color:#fff;
		          outline:none;
		        }
			}
		}
	}
	.plug{
		display:flex;
		align-items:center;
	}
</style>
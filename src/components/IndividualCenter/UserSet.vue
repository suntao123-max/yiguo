<template>
	<div class="set">
		<div class="service">
			<span>客服热线</span>
			<p><span>400-000-7788 </span><i class="el-icon-arrow-right"></i></p>
		</div>
		<div class="about">
			<router-link to="/about">
				<p>
					<span>关于我们</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</router-link>
			<router-link to="/businessLicence">
				<p>
					<span>营业资质</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</router-link>
			<router-link to="/serviceAgreement">
				<p>
					<span>服务协议</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</router-link>
			<router-link to="/serviceAgreement">
				<p>
					<span>隐私条款</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</router-link>
			<router-link to="/serviceAgreement">
				<p>
					<span>配送说明</span>
					<i class="el-icon-arrow-right"></i>
			</p>
		</router-link>
			<router-link to="/serviceAgreement">
				<p class="special">
					<span>退换货说明</span>
					<i class="el-icon-arrow-right"></i>
				</p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
	
	}
</script>

<style scoped lang="less">
	.set{
		height:100vh;
		font-size:14px;
		background-color:#f4f4f4;
		.service{
			height:3rem;
			line-height:3rem;
			padding:0 1rem;
			background-color:#fff;
			display:flex;
			justify-content:space-between;
			p{
				span{
					color:#32d783;
				}
			}
		}
		.about{
			margin-top:1rem;
			background-color:#fff;
			.special{
				border:none;
			}
			p{
				border-bottom:1px solid #3333;
				height:3rem;
				line-height:3rem;
				margin-left:1rem;
				position:relative;
				padding:0 1rem;
				span{
					color:#000;
				}
				i{
					color:#000;
					position:absolute;
					right:1rem;
					top:1rem;
				}
			}
		}
	}
</style>
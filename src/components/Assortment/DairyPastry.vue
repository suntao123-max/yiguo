<template>
	<div class="egg">
		<ul>
			<li v-for="(v,i) in items" :key=i>
				<img v-lazy="v.src" alt="" >
				<span v-text="v.name"></span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				items:[
					{src:'/static/images/assortment/Egg/9288709173519056_220.jpg',name:'全部'},
					{src:'/static/images/assortment/Egg/9288709152449231_220.jpg',name:'鸡'},
					{src:'/static/images/assortment/Egg/9288709152416463_220.jpg',name:'鸭'},
					{src:'/static/images/assortment/Egg/9288709152383695_220.jpg',name:'鹅/鸽/特色禽类'},
					{src:'/static/images/assortment/Egg/9288709152350927_220.jpg',name:'蛋'}
				]
			}
		}
	}
</script>

<style lang="less">
	.egg{
		margin:0 0 7.5em 7em;
		ul{
			display:flex;
			flex-wrap:wrap;
			height:100%;
			justify-content:flex-start;
			li{
				width:5em;
				display:flex;
				text-align:center;
				flex-direction:column;
				margin:1em;
				img{
					width:5em;
				}
				span{
					color:gray;
					font-size:14px;
				}
			}
		}
	}
</style>
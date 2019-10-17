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
					{src:'/static/images/assortment/meat/9288709152481999_220.jpg',name:'全部'},
					{src:'/static/images/assortment/meat/9570202619127043_220.jpg',name:'牛排'},
					{src:'/static/images/assortment/meat/9288709152318159_220.jpg',name:'进口牛肉'},
					{src:'/static/images/assortment/meat/9288709152285391_220.jpg',name:'国产牛肉'},
					{src:'/static/images/assortment/meat/9288709152252623_220.jpg',name:'猪肉'},
					{src:'/static/images/assortment/meat/9288709152219855_220.jpg',name:'羊肉'},
					{src:'/static/images/assortment/meat/9288709152121551_220.jpg',name:'肉制品'}
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
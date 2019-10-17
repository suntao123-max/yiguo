<template>
	<div class="cooking">
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
					{src:'/static/images/assortment/importedFruit/all.jpg',name:'全部'},
					{src:'/static/images/assortment/importedFruit/9288708943127244_220.jpg',name:'奇异果'},
					{src:'/static/images/assortment/importedFruit/9288708942996172_220.jpg',name:'车厘子'},
					{src:'/static/images/assortment/importedFruit/plum.jpg',name:'李'},
					{src:'/static/images/assortment/importedFruit/9288709129020111_220.jpg',name:'莓'},
					{src:'/static/images/assortment/importedFruit/9288708943192780_220.jpg',name:'牛油果'},
					{src:'/static/images/assortment/importedFruit/9288709129511631_220.jpg',name:'提子'},
					{src:'/static/images/assortment/importedFruit/9288709129478863_220.jpg',name:'苹果'},
					{src:'/static/images/assortment/importedFruit/9288709129446095_220.jpg',name:'梨'},
					{src:'/static/images/assortment/importedFruit/9288709129413327_220.jpg',name:'柑桔橙柚'},
					{src:'/static/images/assortment/importedFruit/9288709128856271_220.jpg',name:'火龙果'},
					{src:'/static/images/assortment/importedFruit/9288709128823503_220.jpg',name:'椰子'},
					{src:'/static/images/assortment/importedFruit/9288709128790735_220.jpg',name:'芒果'},
					{src:'/static/images/assortment/importedFruit/9288709128692431_220.jpg',name:'凤梨'},
					{src:'/static/images/assortment/importedFruit/9288709128659663_220.jpg',name:'榴莲'},
					{src:'/static/images/assortment/importedFruit/9288709128626895_220.jpg',name:'热带水果'},
					{src:'/static/images/assortment/importedFruit/9288709128594127_220.jpg',name:'时令水果'},
					{src:'/static/images/assortment/importedFruit/9288709128561359_220.jpg',name:'原箱水果'},
				]
			}
		}
	}
</script>

<style lang="less">
	.cooking{
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
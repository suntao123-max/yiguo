<template>
	<div class="address">
		<ul>
			<li>热门城市</li>
			<li v-for="(v,i) in PopularCity" :key="i">
				<button type="button" @click="explicit(v)">
					{{v.name}}
				</button>
				<div class="box">
					
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				PopularCity:[
					{name:'上海',detailed:['宝山区','长宁区','奉贤区','黄浦区','虹口区','静安区','金山区','嘉定区','卢湾区','南汇区','普陀区','浦东新区','青浦区','松江区','闵行区','徐汇区','杨浦区','闸北区']},
					{name:'北京',detailed:['朝阳区','昌平区','崇文区','东城区','大兴区','丰台区','房山区','海淀区','门头沟区','石景山区','顺义区','通州区','西城区','宣武区']},
					{name:'天津',detailed:['北辰区','宝坻区','东丽区','滨海新区','河东区','河西区','红桥区','和平区','河北区','蓟县','津南区','静海县','南开区','宁河县','武清区','西青区']},
					{name:'杭州',detailed:['西湖区','滨江区','临安市','桐庐县','建德市','拱墅区','江干区','萧山区','下城区','富阳市','淳安县','余杭区','上城区']},
					{name:'昆山',detailed:['昆山市']},
					{name:'南京',detailed:['溧水区','秦淮区','栖霞区','雨花台区','六合区','白下区','江宁区','高淳县','玄武区','下关区','鼓楼区','浦口区','建邺区']},
					{name:'宁波',detailed:['江北区','奉化区','海曙区','鄞州区','余姚市','象山县','北仓区','宁海县','镇海区','江东区']},
					{name:'苏州',detailed:['相城区','吴江市','张家巷市','工业园区','吴中区','太仓市','姑苏区','虎丘区']},
					{name:'无锡',detailed:['惠山区','新区','南长区','北塘区','宜兴市','锡山区','江阴市','滨湖区','崇安区']},
					{name:'东莞',detailed:['黄江镇','谢岗镇','常平镇','横沥镇','东城街道','东坑县','石排镇','寮步镇','清溪镇','大朗镇','石龙镇','桥头镇','石碣镇','万江街道','莞城街道','涂山县','企石镇']},
					{name:'佛山',detailed:['顺德区','南海区','禅城区','高明区','三水区']},
					{name:'广州',detailed:['天河区','荔湾区','萝岗区','花都区','番禺区','南沙区','越秀区','增城区','黄浦区','从化市','东山区','白云区','海珠区']},
					{name:'江门',detailed:['蓬江区','江海区','恩平市','鹤山市','开平区','新会区','台山市']},
					{name:'深圳',detailed:['南山区','罗湖区','盐田区','福田区','龙岗区','宝华区','龙华新区','光明新区','大鹏新区','坪山新区',]},
					{name:'珠海',detailed:['香港区','斗门区','南湾区','金唐区','金湾区']},
					{name:'中山',detailed:['小榄镇','横栏镇','中山市','三角镇','东区街道','港口镇','沙溪镇','西区街道','五桂山街道','东凤镇','南区街道','东升镇','黄圃镇','民众镇','古镇镇','南头镇','阜沙镇','石岐街道','坦洲区','火炬开发区']}
				]
			}
		},
		methods:{
			explicit:function(v){
				console.log(v.detailed)
			}
		}
	}
</script>

<style scoped lang="less">
	.address{
		ul{	
			margin:2rem 1rem;
			display:flex;
			justify-content:flex-start;
			flex-wrap:wrap;
			li{
				width:33%;
				overflow-y:scroll;
				&:first-child{
					width:100%;
				}
				button{
					margin:1rem 2rem;
					height:2rem;
					width:5rem;
					background-color:#fff;
					border:1px solid #3333;
				}
				.box{
					// border:1px solid red;
					// position:fixed;
					// bottom:60px;
					// left:0;
					// width:100%;
					// height:50%;
				}
			}
		}
	}	
	
</style>
<template>
  <div>
    <el-backtop :bottom="100">
      <div>
        <i class="el-icon-top"></i>
      </div>
    </el-backtop>
    <el-container>
           <el-header>
            <el-row :gutter="24">
              <el-col :span="6">
                <div @click="address" class="grid-content bg-purple">
                    <span v-text="Address"></span>
                <i class="el-icon-arrow-down"></i>
              </div></el-col>
              <el-col :span="18"><div class="grid-content bg-purple">
                  <router-link to="/assortment/">
                    <el-input
                      placeholder="请输入商品信息"
                      >
                      <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                  </router-link>
              </div></el-col>
            </el-row>
           </el-header>
           <el-main>
            <div>
                <template>
                  <el-carousel indicator-position="none">
                    <el-carousel-item>
                      <img src="/static/images/home/rotation1.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                      <img src="/static/images/home/rotation2.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                      <img src="/static/images/home/rotation3.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                      <img src="/static/images/home/rotation4.jpg" alt="">
                    </el-carousel-item>
                    <el-carousel-item>
                      <img src="/static/images/home/rotation5.jpg" alt="">
                    </el-carousel-item>
                  </el-carousel>
                </template>
            </div>
            <div>
                <ul>
                    <li v-for="(v,i) in item" v-html :key="i">
                        <img :src="v.src" alt="">
                        <p v-html="v.name"></p>
                    </li>
                </ul>
                <img src="/static/images/home/9.gif" class="img" alt="">
                <div>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <h3><i>易果</i><i class="green">快报</i></h3>
                        </el-col>
                        <el-col :span="16">
                            <el-carousel height="20px" direction="vertical" :autoplay="true">
                                <el-carousel-item v-for="(v,i) in arr1" :key="i">
                                  <p class="medium" v-text="v.name"></p>
                                </el-carousel-item>
                            </el-carousel>
                        </el-col>
                    </el-row>
                </div>
                <img src="/static/images/home/10.png" alt="">
                <div>
                    <ul class="flex img">
                        <li v-for="(v,i) in item1" v-html :key="i">
                            <img v-lazy="v.src" alt="">
                            <p v-text="v.title"></p>
                            <div v-text="v.genre"></div>
                            <div class="flex1">
                                <b v-html="v.price" class="red"></b>
                                <router-link to="" ><img @click='addshop(v)' v-lazy="v.shop" alt="" style="height:18px;width:18px;">
                                </router-link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="pro" v-for="(v,i) in item2" :key="i">
                <img v-lazy="v.src" alt="">
            </div>
            <div class="color">
                <ul class="flex img">
                    <li v-for="(m,i) in item3" v-html :key="i">
                        <img v-lazy="m.src" alt="">
                        <p v-text="m.title"></p>
                        <div v-text="m.genre"></div>
                        <div class="flex1">
                            <b v-html="m.price" class="red"></b>
                            <router-link to="" ><img @click='addshop(m)' v-lazy="m.shop" alt="" style="height:18px;width:18px;">
                            </router-link>
                        </div>
                    </li>
                    <li>查看更多<i class="el-icon-arrow-right"></i></li>
                </ul>
                <img src="/static/images/home/48.jpg" class="img" alt="">
                <ul class="flex img">
                    <li v-for="(m,i) in item3" v-html :key="i">
                        <img v-lazy="m.src" alt="">
                        <p v-text="m.title"></p>
                        <div v-text="m.genre"></div>
                        <div class="flex1">
                            <b v-html="m.price" class="red"></b>
                            <router-link to="" ><img @click='addshop(m)' v-lazy="m.shop" alt="" style="height:18px;width:18px;">
                            </router-link>
                        </div>
                    </li>
                    <li>查看更多<i class="el-icon-arrow-right"></i></li>
                </ul>
                <img src="/static/images/home/49.jpg" class="img" alt="">
                <ul class="flex img">
                    <li v-for="(m,i) in item3" v-html :key="i">
                        <img v-lazy="m.src" alt="">
                        <p v-text="m.title"></p>
                        <div v-text="m.genre"></div>
                        <div class="flex1">
                            <b v-html="m.price" class="red"></b>
                            <router-link to=""><img @click='addshop(m)' v-lazy="m.shop" alt="" style="height:18px;width:18px;">
                            </router-link>
                        </div>
                    </li>
                    <li>查看更多<i class="el-icon-arrow-right"></i></li>
                </ul>
                <div class="flex2 img">
                    <img src="/static/images/home/50.jpg" alt="">
                    <img src="/static/images/home/51.jpg" alt="">
                </div>
                <ul class="flex3">
                    <li class="flex4" v-for="(v,i) in item4" :key="i">
                        <img v-lazy="v.src" alt="">
                        <div class="flex3">
                            <div v-text><h4>{{v.genre}}</h4></div>
                            <div v-text><span v-if="v.flag!=''">{{v.flag}}</span>{{v.title}}</div>
                            <div class="flex2">
                                <div class="All">
                                    <h2 v-html="v.price" class="red"></h2>&nbsp;
                                    <p v-html="'/'+v.mun" style="line-height: 2rem"></p>
                                </div>
                                <router-link to="" ><img @click='addshop(v)' v-lazy="v.shop" alt="" style="height:18px;width:18px;">
                                </router-link>
                            </div>
                        </div>
                    </li>
                    <li class="img"> <h3>——· 新鲜水果 ·——</h3></li>
                </ul>
            <ul class="flex5">
                <div v-for="(v,i) in item5" :key="i">
                    <li class="flex3">
                        <img v-lazy="v.src" alt="">
                        <p v-text v-show="v.title!=''" class="flag">{{v.title}}</p>
                        <p v-html><h4>{{v.genre}}</h4></p>
                        <div class="flex2">
                            <div class="All text">
                                <h2 v-html="v.price" class="red"></h2>
                                 <p v-html="'/'+v.num" style="font-size:12px;line-height: 2rem"></p>
                            <router-link to="" ><img @click='addshop(v)' v-lazy="v.shop" alt="" style="height:18px;width:18px;">
                            </router-link>
                            </div>
                        </div>
                    </li>
                </div>
            </ul>
            </div>
           </el-main>
        </el-container>
  </div>
</template>

<script>
    export default {
      data(){
        return{
            Address:'北京市',
            item:[
                {id:'1',src:'/static/images/home/1.png',name:'买二付一'},
                {id:'2',src:'/static/images/home/2.png',name:'原箱佳沛'},
                {id:'3',src:'/static/images/home/3.png',name:'会员福利'},
                {id:'5',src:'/static/images/home/4.png',name:'银行活动'},
                {id:'6',src:'/static/images/home/5.png',name:'新品惠萃'},
                {id:'7',src:'/static/images/home/6.png',name:'精选肉类'},
                {id:'8',src:'/static/images/home/7.png',name:'海鲜水产'},
                {id:'9',src:'/static/images/home/8.png',name:'食品饮料'}
            ],
            item1:[
                {id:'10',src:'/static/images/home/11.jpg',title:'限时抢购',genre:'陕西大荔冬枣500g/盒',price:'&yen;15.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'11',src:'/static/images/home/12.jpg',title:'限时抢购',genre:'突尼斯软籽石榴4个250g以上/个',price:'&yen;45',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'12',src:'/static/images/home/13.jpg',title:'限时抢购',genre:'天润冰淇淋化了全脂风味发酵乳180g*12',price:'&yen;54.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'13',src:'/static/images/home/14.jpg',title:'限时抢购',genre:'云南蜜桔1kg 50g/个',price:'&yen;18.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'14',src:'/static/images/home/15.jpg',title:'爆款直降',genre:'大成盐酥鸡原味350g',price:'&yen;14.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'15',src:'/static/images/home/16.jpg',title:'爆款直降',genre:'原膳安格斯汉堡牛肉饼110g',price:'&yen;19.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'16',src:'/static/images/home/17.jpg',title:'爆款直降',genre:'凤祥食品鸡胸肉500g',price:'&yen;14.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'17',src:'/static/images/home/18.jpg',title:'限时抢购',genre:'秘鲁蓝莓4盒约125g/盒',price:'&yen;59.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'18',src:'/static/images/home/19.jpg',title:'限时抢购',genre:'云南宾川无籽红提800g',price:'&yen;29.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'19',src:'/static/images/home/20.jpg',title:'限时抢购',genre:'原膳加拿大北极甜虾熟冻500g(120+/kg)',price:'&yen;29.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                {id:'20',src:'/static/images/home/21.jpg',title:'直降79元',genre:'Zespri佳沛新西兰阳光金奇异果3.3kg原箱27-30个',price:'&yen;209',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                ],
                item2:[
                    {id:'21',src:'/static/images/home/30.jpg'},
                    {id:'22',src:'/static/images/home/31.jpg'},
                    {id:'23',src:'/static/images/home/32.jpg'},
                    {id:'24',src:'/static/images/home/33.jpg'},
                    {id:'25',src:'/static/images/home/34.jpg'},
                    {id:'25',src:'/static/images/home/36.jpg'},
                    {id:'27',src:'/static/images/home/35.jpg'},
                    {id:'28',src:'/static/images/home/37.jpg'}               
                ],
                item3:[
                    {id:'29',src:'/static/images/home/40.jpg',title:'直降79元',genre:'巨无霸金果原箱', price:'&yen;219',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'30',src:'/static/images/home/41.jpg',title:'基地发货',genre:'新疆库尔勒精选香梨3kg礼盒装约100g/个',price:'&yen;86',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'31',src:'/static/images/home/47.jpg',title:'第二份0元',genre:'越南红心火龙果2个410g以上/个(大果)',price:'&yen;49.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'32',src:'/static/images/home/42.jpg',title:'直降30元',genre:'台湾麻豆文旦柚3kg礼盒装约380g/个',price:'&yen;118',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'33',src:'/static/images/home/43.jpg',title:'暂无优惠',genre:'泰国龙眼1kg/盒',price:'&yen;39.9',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'34',src:'/static/images/home/44.jpg',title:'限时抢购',genre:'台湾麻豆文旦柚2个 400g以上/个',price:'&yen;39',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                    {id:'35',src:'/static/images/home/45.jpg',title:'暂无优惠',genre:'四川青凯特芒2个400g以上/个',price:'&yen;32',shop:'/static/images/home/shop.png',isCheck:true,proNum:1}
                ],
                item4:[
                      {id:'36',src:'/static/images/home/60.jpg',flag:'产地直发',title:'产地直发 满满茄红素 柔嫩味甜',mun:'2个',price:'&yen;38' ,genre:'福建平和红肉蜜柚礼盒装',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'37',src:'/static/images/home/61.jpg',flag:'基地发货',title:'不支持合单 香甜清爽 一个不过瘾',mun:'20个',price:'&yen;78' ,genre:'阳光小mi四川红心猕猴桃礼盒',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'38',src:'/static/images/home/62.jpg',flag:'基地发货',title:'饱满红润 细腻多汁',mun:'3.5kg',price:'&yen;88' ,genre:'大凉山野生苹果礼盒装',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'39',src:'/static/images/home/63.jpg',flag:'直降10元',title:'野生个大 饱满肥美 原装进口',mun:'400g',price:'&yen;59' ,genre:'野生熟冻面包蟹',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'40',src:'/static/images/home/64.jpg',flag:'直降10元',title:'鲟鱼 法国银鳕鱼 犬牙鱼',mun: '200g',price:'&yen;123' ,genre:'法国银鳕鱼',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'41',src:'/static/images/home/65.jpg',flag:'爆款直降',title:'柔嫩细滑 雪花丰富',mun: '250g',price:'&yen;58' ,genre:'小公牛雪花牛肉粒',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'42',src:'/static/images/home/67.jpg',flag:'',title:'浓浓鸡汤与鲜美花胶跟鲍鱼的完美融合，满满胶原蛋白',mun:'1.6kg',price:'&yen;198',genre:'原膳港式花胶鸡',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'43',src:'/static/images/home/68.jpg',flag:'直降40元',title:'严选食材 良心造物',mun: '380g',price:'&yen;168' ,genre:'凯司令·春华(菌菇)礼盒',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'44',src:'/static/images/home/69.jpg',flag:'',title:'特级初榨橄榄油',mun: '1L',price:'&yen;118',genre:'伯爵特技初榨橄榄油',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'45',src:'/static/images/home/70.jpg',flag:'单品包邮',title:'产地下发下单后48小时发货 仅可与云南菌菇合单',mun: '500g',price:'&yen;468' ,genre:'香格里拉精选松茸',shop:'/static/images/home/shop.png',isCheck:true,proNum:1}
                ],
                item5:[
                      {id:'46',src:'/static/images/home/71.jpg',title:'基地发货',price:'&yen;69',num:'2.5kg',genre:'谷田园嘎啦苹果礼盒装',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'47',src:'/static/images/home/46.jpg',title:'直降79元',price:'&yen;209',num:'3.3kg',genre:'espri佳沛新西兰阳光金果',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'48',src:'/static/images/home/74.jpg',title:'基地发货',price:'&yen;68',num:'24个',genre:'川红心猕猴桃礼盒装',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'49',src:'/static/images/home/72.jpg',title:'',price:'&yen;29',num:'1kg ',genre:'疆薄皮脆甜西州蜜瓜',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'50',src:'/static/images/home/73.jpg',title:'',price:'&yen;25',num:'1.3kg',genre:'禧圣女果',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                      {id:'51',src:'/static/images/home/19.jpg',title:'限时抢购',price:'&yen;29.9',num:'800g',genre:'南宾川无籽红提',shop:'/static/images/home/shop.png',isCheck:true,proNum:1},
                ],
                arr1:[
                    {name:'工行e支付满100减30！'},
                    {name:'移动/联通积分免费兑换储值卡'},
                    {name:'不良信息与举报'},
                    {name:'营业资质公示，详情请点击查询'}
                ]
            }
          },
          methods:{
            address:function(){
                window.location.href = '/#/address/'
            },
            input:function(){
              window.location.href = '/#/assortment/';
            },
            addshop:function(v){
              this.$message("添加购物车成功")
                if(!localStorage.getItem('id')){
                    let arr = []
                    arr.push(v)
                localStorage.setItem('id',JSON.stringify(arr))
                }else{
                    var arr = JSON.parse(localStorage.getItem('id'))
                    arr.push(v)
                    localStorage.setItem('id',JSON.stringify(arr))
               }
            }
          },
          mounted:function(){
            this.Address = localStorage.getItem('address')
          },
      }
</script>

<style scoped lang="less">
  .el-backtop{
    div{
          height: 100%;
          width: 100%;
          border-radius:50%;
          background-color: #fffefb;
          box-shadow: 0 0 6px rgba(0,0,0, .12);
          text-align: center;
          line-height: 40px;
          color: #959393;
        i{
        transform:scale(1.7);
      }
    }
  }
  .red{
    color:red;
    position:relative;
    top:-.2rem;
  }
  .All{
    display:flex;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .text{
    width:100%;
  }
  .color{
    background-color:#fafafa;
  }
  .el-header{
        background-color:#38d985;
        height:2rem;
        line-height:3.5rem;
        display:fixed;
        top:0;
    }
    .el-main{
        padding:0;
        width:100%;
        overflow:hidden;
        overflow-y:auto;
    }
    .search{
        border:1px solid white;
        height:2.2rem;
        width:100%;
        border-radius:2rem;
        outline:none;
        font-size:15px;
    }
    img{
        height:100%;
        width:100%;
    }
    .img{
        margin-top:2rem;
    }
    ul{
        list-style-type:none;
        display:flex;
        flex-wrap:wrap;
    }
    li{
        width:25%;
        text-align:center;
    }
    .green{
        color:#23c780;
    }
    .flex{
        height:172px;
        display:flex;
        flex-wrap:nowrap;
        overflow-x:auto;
        font-size:1rem;
        overflow-y:hidden;
    }
    .flex li {
        height:166px;
        width:120px;
        border:1px solid #3331;
        margin:5px;
    }
    .flex img{
        width:90px;
        height:90px;
    }
    .flex p{
        color:#fff;
        font-weight:bold;
        width:80px;
        height:20px;
        background-color:red;
        border-top-left-radius:.4rem;
        border-top-right-radius:.6rem;
        border-bottom-right-radius:.6rem;
    }
    .flex div{
        margin:.1rem 0;
        width:7rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .flex .red{
        color:red;
    }
    .flex1{

        display:flex;
        justify-content:space-between;
    }
    .flex2{
        width:50%;
        display:flex;
    }
    .flex2>img{
        position:relative;
        top:.3rem;
    }
    .flex3{
        display:flex;
        align-items:flex-start;
        flex-direction:column;
    }
    .flex3 li{
        width:100%;
    }
    .flex3 li img{
        margin:10px;
        width:100px;
        height:100px;
    }
    .flex3 .flex4{
        width:90%;
        transform:translate(5%);
        display:flex;
        border:1px solid #3333;
        margin:.4rem 0;
        border-radius:1rem;
    }
    .flex4 div,.flex3 h4{
        margin-top:5px;
        margin-bottom:.2rem;
        width:100%;
        text-align:left;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .flex4 span{
        display:inline-block;
        padding:0 .2rem;
        border-radius:1rem;
        color:#01b27a;
        border:1px solid #01b27a;
    }
    .flex1 i {
        line-height:1rem;
        color:blue;
    }
    .flex5{
        margin:20px auto 70px;
        width:80%;
        display:flex;
        justify-content:space-around;
        background-color:#fafafa;
    }
    .flex5>div{
        margin:auto;
        width:50%;
    }
    .flex5 li{
        border-radius:.5rem;
        margin:2rem auto;
        position:relative;
        height:13rem;
    }
    .flex5 li>img{
        margin:auto;
        width:80%;
        height:55%;
        position: relative;
        top:-1rem;

    }
    .flex5 .flex3{
        border:1px solid #3333;
        width:80%;
        width:60%;
    }
    .flex5 .flag{
        position:absolute;
        bottom:5rem;
        color:#fff;
        white-space:nowrap;
        overflow:hidden;
        background-color:#f00; 
        padding:0 .4rem;
        border-top-left-radius:.6rem;
        border-top-right-radius:.7rem;
        border-bottom-right-radius:.7rem;
    }
    .flex5 h4{
        position:relative;
        top:-.5rem;
    }
    .flex5 .All img{
        position:absolute;
        right:.5rem;
    }
</style>
<style>
    *{
        margin:0;
        padding:0;
    }
    body{
        height:100%;
    }
</style>

<template>
  <div class="enroll">
    <form action="">
      <ul>
        <li >
           <input type="text" v-model.trim="name" placeholder="请输入您的手机号" />
        </li>
        <li class="plug">
           <input type="text" v-model.trim="code" placeholder="请输入您的验证码" />
           <router-view/>
        </li>
        <li>
            <input type="text" placeholder="请设置您的密码" v-model.trim="pwd" >
        </li>
        <li>
            <input type="text" placeholder="请再次输入您的密码" v-model.trim="Vpwd" >
        </li>
      </ul>
      <div class="protocol">
         <input type="checkbox" id="chk" v-model="checked" >
         <label for="chk">
           我以阅读<router-link to="">《易果隐私协议》</router-link><router-link to="">《隐私条款》</router-link>并同意
         </label>
      </div>
      <div class="submit">
          <input type="button" @click="submit" value="立即注册" :disabled="!checked" />
      </div>
    </form>
  </div>
</template>

<script>
  export default{
     data() {
        return {
          name: '',
          pwd: '',
          code:'',
          Vpwd:'',
          checked:true
        }
      },
      methods: {
        submit:function(){
          if(!this.name){
            alert("请输入手机号")
          }else{
            let n = /^1[3-9]\d{9}$/;
            if(!n.test(this.name)){
              alert("请输入正确的手机号")
            }else{
              if(!this.code){
                alert("请输入验证码")
              }else{
               let c = /^\d{4,6}$/;
               if(!c.test(this.code)){
                alert("请输入正确的四到六位验证码")
               }else{
                if(!this.pwd){
                  alert("请输入密码")
                }else{
                  let p = /^.{6,}$/;
                  if(!p.test(this.pwd)){
                    alert("请输入至少六位密码")
                  }else{
                      if(!this.Vpwd){
                        alert("请在次输入密码")
                      }else{
                        if(this.Vpwd==this.pwd){
                          localStorage.setItem(this.name,this.pwd)
                          alert("注册成功,为您跳转登录页面")
                          window.location.href = '/#/login'  
                        }else{
                          alert("请输入相同的密码")
                        }
                      }
                  }
                }
               }
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
  .enroll{
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
          [type="text"]{
            font-size:16px;
            height:30px;
            margin:1rem;
            border:none;
            outline:none;
          }
        }
      }
      .protocol{
        text-align:center;
        outline:none;
        a{
          margin:20px 0 10px;
        }
      }
      .submit{
        margin-top:20px;
        width:100%;
        display:flex;
        justify-content:space-around;
        input{
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
</style>
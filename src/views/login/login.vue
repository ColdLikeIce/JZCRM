
<template>
  <div class="login">
     <div class="qrbox">
       <div class="qritem">
         <p>欢迎登录决招CRM</p>
         <div class="qrcode" id="qrcrm"></div>
       </div>
       <div class="qritem">
         <p>欢迎登录决招HRM</p>
         <div class="qrcode" id="qrhrm"></div>
       </div>
       <div class="qritem">
         <p>欢迎登录决招进销存</p>
         <div class="qrcode" id="qrjxc"></div>
       </div>
     </div>
  </div>
</template>

<script>

export default {
  name: 'heLogin',
  data() {
    return {
    };
  },

  components: {},

  computed: {},

  creacted(){},

  mounted(){
    this.qrLogin('qrcrm');
    this.qrLogin('qrhrm');
    this.qrLogin('qrjxc');
    console.log(window.frames)
  },

  methods: {
   qrLogin(type){
        let appId,decodeUrl,encodeUrl
        if(type!=='qrcrm'){
           appId = "dingoaxnoqbapnx88kpu8x";
           decodeUrl = "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=" + appId + "&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https://www.h3yun.com/Login/ScanLoginCallback";
           encodeUrl = encodeURIComponent("https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=" + appId + "&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https://www.h3yun.com/login/ScanLoginCallback");
          }else{
           appId = "dingoajfc46mx8eosv9qp1";
           decodeUrl = "https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=" + appId + "&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https%3A%2F%2Fsaas.h3yun.com%2Flogin%2FScanLoginCallback%3Fsuite%3Dsuitevuwnqkfwemqtv3ch%26logoutRedirectUrl%3Dhttp%3A%2F%2Fjuezhaosaas.h3yun.com%26redirecturl%3Dhttps%3A%2F%2Fwww.saas.h3yun.com%2FCRM%2Findex.html";
           encodeUrl = encodeURIComponent("https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=" + appId + "&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=https%3A%2F%2Fsaas.h3yun.com%2Flogin%2FScanLoginCallback%3Fsuite%3Dsuitevuwnqkfwemqtv3ch%26logoutRedirectUrl%3Dhttp%3A%2F%2Fjuezhaosaas.h3yun.com%26redirecturl%3Dhttps%3A%2F%2Fwww.saas.h3yun.com%2FCRM%2Findex.html");
          } 
    let hanndleMessage = function (event) {
        let origin = event.origin;
        console.log("origin", event.origin);
        if (origin.indexOf("dingtalk") > -1) {
            console.log(event.data);
            let loginTmpCode = event.data; //拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
            if(type!=='qrcrm'){
              window.location.href = decodeUrl + "&loginTmpCode=" + loginTmpCode; //跳转到授权链接
            }  
        }
    };

    if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', hanndleMessage, false);
    } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onmessage', hanndleMessage);
    }
    //切换到钉钉扫码登陆
    let obj = DDLogin({
        id: type, //这里需要你在自己的页面定义一个HTML标签并设置id，例如<div id="login_container"></div>或<span id="login_container"></span>
        goto: encodeUrl,
        style: "border:none;background-color:transparent;",
        href: '',
        width: "230",
        height: "230"
    });
   },
  },
}

</script>
<style lang='less' scoped>
 .login{
   padding-top: 273px;
   width: 100%;
   min-width: 1310px;
   height: 1080px;
   background-image: url('/static/img/login_bg.jpg');
   background-position: center center;
   background-size: cover;
   .qrbox{
     padding: 86px 38px;
     display: flex;
     margin:0 auto;
     width:1000px;
     height:533px;
     background:rgba(255,255,255,1);
     border-radius:20px;
     animation:boingInUp 1s 1s 1 both;
     p {
      font-size:24px;
      font-family:SourceHanSansCN-Light;
      color:rgba(0,114,255,1);
      line-height:1;
      margin-bottom: 60px;
     }
    .qritem{
      position: relative;
      width: 220px;
      margin: 0 44px;
      overflow: hidden;
      .qrcode{
        width: 365px;
        position: absolute;
        left: -74px;
        top: 46px;
      }
    }
   }
 }
 @keyframes boingInUp {
  0% {
    opacity: 0;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(-90deg);
  }
  
  50% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(50deg);
  }

  100% {
    opacity: 1;
    transform-origin: 50% 0%;
    transform: perspective(800px) rotateX(0deg);
  }
}
  
</style>
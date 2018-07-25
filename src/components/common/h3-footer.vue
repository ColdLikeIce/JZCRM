<!--  -->
<template>
  <div class="footer">
    <div class="w_1200">
      <div class="footer_content">
        <dl class="company">
          <dt>深圳决招网络科技有限公司</dt>
          <dd>服务热线：400-1399-566</dd>
          <dd>市场合作：market@authine.com</dd>
          <dd>企业总机：0755-33940000</dd>
          <dd>企业地址：深圳市南山区科技园中区科兴科学园B4-6层</dd>
        </dl>
        <div class="addserver">
          <img src="../../assets/img/serverqrcode.png" alt="">
          <p>钉钉扫码加入服务群</p>
        </div>
      </div>
      <p class="rights">版权所有@2010-2018 深圳氚云网络科技有限公司 粤ICP备15096637号-1</p>
    </div>
  </div>
</template>

<script>

export default {
  name:'h3-footer',
  data() {
    return {
    };
  },
}

</script>
<style lang='less' scoped>
.footer{
width:100%;
height:402px;
background:rgba(245,249,252,1);
}
.footer_content{
  padding: 69px 20px 53px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 16px;
  color: #757D90;
  border-bottom: 1px solid #C6CBD4;
  .company{
    margin-bottom: 0;
    text-align: left;
    dt{
      font-size:20px;
      line-height: 1;
      margin-bottom: 47px;
      font-family:SourceHanSansCN-Light;
    }
    dd{
      margin-bottom: 18px;
      line-height: 1;
      &:last-of-type{
        margin-bottom: 0;
      }
    }
  }
  .addserver{
    img{
      width: 88px;
      height: 88px;
      margin-bottom: 15px;
    }
  }
}
.rights{
  font-size:16px;
  font-family:STHeitiSC-Light;
  color:rgba(117,125,144,1);
  line-height: 1;
  text-align: left;
  margin-top: 27px;
  padding-left: 20px;
}
</style>
<template>
  <div class="index">
      <p class="slogan">{{ slogan }}</p>
      <p class="subtitle">{{subtitle}}</p>
      <div class="productWrap " :class="{'animate':productAnimate}"> 
       <img class="productBg" :src="productBg" alt="iphone">
       <h3-card :class="`productCard${index}`" v-for="(item,index)  in productList" :cardData="item" :key="index"></h3-card>
      </div>
    <div class="partner wraper" id="partner" :class="{'animate':partnerAnimate}">
      <p class="smalltitle">{{partnertitle[0]}}</p>
      <p class="smalltitle">{{partnertitle[1]}}</p>
      <div class="partnerContent">
        <div class="partItem" v-for="(item,index) in partnerList" :key="index">
          <div class="img_box" :style="`background-image:url(${item.imgurl})`"></div>
          <p class="content">{{item.name}}</p>
          <p class="content">{{item.detail}}</p>
        </div>
      </div>
    </div>
    <div class="experience" id="experience">
      <div class="wraper experienceWrap" :class="{'animate':experienceAnimate}">
        <div class="leftpart">
          <p class="left_item">{{easyusedmsg}}</p>
          <p class="left_item">{{freemsg}}</p>
          <div class="left_button">
            <a-button class="button_item">决招CRM体验</a-button>
            <a-button class="button_item">决招HRM体验</a-button>
            <a-button class="button_item">决招进销存体验</a-button>
          </div>
        </div>
        <div class="rightpart">
          <img src="/static/img/index/bg.png">
        </div>
      </div>
    </div>
    <div class="case">
      <div class="wraper">
      <p class="caseTitle">专注服务中小企业 持续创造商业价值</p>
      <div class="caseImgBox">
            <span v-show="caseImgList.length>3" @click="checkoutImg('pre')" :class="{'disabled':pageIndex===0}" class="imgBtn pre">
              <a-icon type="left" />
            </span>
            <div class="caseImgView">
              <ul class="imgList" :style="`width:${1260*pageNum}px;transform:translateX(${-pageIndex/pageNum*100}%)`">
                <li class="imgListItem" v-for="(item ,index) in caseImgList" :style="`background-image:url(${item})`"></li>
              </ul>
            </div>
            <span v-show="caseImgList.length>3" @click="checkoutImg('next')" :class="{'disabled':pageIndex===pageNum-1}" class="imgBtn next">
              <a-icon type="right" />
            </span>
          </div>
          <div class="moreCase">
            <router-link class="" tag="span"  to="/customerCase">更多样例<a-icon type="right" /></router-link>
          </div>
    </div>
    </div>
  </div>
</template>

<script>
import h3Card from './indexCard';
export default {
  name: 'Index',
  components:{
    h3Card
  },
  data() {
    return {
      productAnimate:false,
      experienceAnimate:false,
      partnerAnimate:false,
      experienceTop:0,
      partnerTop:0,
      clientHeight:0,
      slogan: '商业有战场，定胜有决招',
      subtitle: '决招——中小企业创新型Saas服务运营商',
      showpart: false,
      
      partnertitle:['阿里巴巴赋能决招','引领企业进入智能移动办公新时代'],
      productBg:'/static/img/index/phone.png',
      productList:[
        { 
          name: '决招CRM',
          img:'/static/img/index/01.png',
          title: '专业易用的客户管理利器,赋能团队高效产出！',
          content: ['以高效的销售管理流程为驱动,精准把每个销售节点','提高团队整体销售水平,全面提升企业销售业绩'],
          path:'/product/jzcrm'
        },
        {
          name: '决招HRM',
          img:'/static/img/index/02.png',
          title: '快速打造中小企业超级人事部',
          content: ['通过员工花名册和薪酬管理等信息化解决方案','全面提升HR工作效率,降低员工成本'],
          path:'/product/jzhrm'
        },
        {
          name: '决招进销存',
          img:'/static/img/index/03.png',
          title: '财/物/供/销一体化,轻松管理有决招',
          content: ['帮助企业改善业务流程,实现商品从采购、入库、销售、财务的全流程信息化管理,节约运营成本,提高运作效率'],
          path:'/product/jzjxc'
        }
      ],
      partnerList: [
        {
          imgurl: '/static/img/index/partner.png',
          name: '阿里巴巴合作商',
          detail: '5000 万A+轮战略投资'
        },
        {
          imgurl: '/static/img/index/dinglog.png',
          name: '钉钉应用市场',
          detail: '首家四星级定制服务商'
        },
        {
          imgurl: '/static/img/index/yun.png',
          name: '阿里云托管数据',
          detail: '企业信息高安全保障'
        }
      ],
      caseImgList:[
        '/static/img/index/company01.png',
        '/static/img/index/company02.png',
        '/static/img/index/company03.png',
         '/static/img/index/company01.png',
        '/static/img/index/company02.png',
        '/static/img/index/company03.png'
        ],
      easyusedmsg: '决招产品操作便捷、容易上手',
      freemsg: '立刻获取15天免费体验权益',
      pageIndex:0
    }
  },
    methods: {
    checkoutImg(type){
      if (type === 'pre') {
        if (this.pageIndex > 0) {
          this.pageIndex--
        }
      } else {
        if (this.pageIndex < this.pageNum - 1) {
          this.pageIndex++
        }
      }
    },
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop+this.clientHeight > this.partnerTop+50) {
        this.partnerAnimate = true
      }
      if(scrollTop+this.clientHeight > this.experienceTop+50){
        this.experienceAnimate = true
      }
    }
  },
  computed:{
    pageNum(){
      return Math.ceil(this.caseImgList.length/3) 
    }
  },
  created(){
    this.pageIndex = 0;
  },
  mounted() {
    let _vm = this;
    setTimeout(()=>{
      _vm.productAnimate = true
    },500)
    const experience_dom = document.querySelector('#experience');
    const partner_dom = document.querySelector('#partner');
    this.experienceTop = experience_dom.getBoundingClientRect().top;
    this.partnerTop = partner_dom.getBoundingClientRect().top;
    // this.clientHeight = document.body.clientHeight;
    console.log(document.body.clientHeight)
    window.addEventListener('scroll', this.handleScroll,false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index {
  padding-top: 100px;
}
.slogan {
  font-size:40px;
  font-family:SourceHanSansCN-ExtraLight;
  color:rgba(0,13,76,1);
  margin-bottom: 40px;
}
.subtitle {
  font-size:20px;
  font-family:SourceHanSansCN-ExtraLight;
  color:rgba(125,132,150,1);
  line-height:1;
}
.productWrap{
  position: relative;
  margin: 0 auto;
  width: 848px;
  height: 851px;
  background: url('/static/img/index/bg01.png') no-repeat center center/cover;
  .productBg{
    position: absolute;
    z-index: 1;
    width: 325px;
    height: 578px;
    left: 263px;
    top: 128px;
  }
}

.animate{
    .productCard0{
      padding: 26px 30px 38px 24px;
      width: 420px;
      transform: translate3d(163px, -301px, 0) scale(1, 1);
      opacity: 1;
    }
    .productCard1{
      padding: 26px 30px 31px 25px;
      width: 360px;
      transition-delay:.5s;
      transform: translate3d(-522px, -180px, 0) scale(1, 1);
      opacity: 1;
    }
    .productCard2{
      padding: 26px 30px 28px 24px;
      width: 420px;
      transition-delay:1s;
      transform: translate3d(125px, 250px, 0) scale(1, 1);
      opacity: 1;
    }
    .leftpart,.rightpart{
      transform: translate3d(0,0,0)!important;
      opacity: 1!important;
    }
    &.partner .partnerContent .partItem{
      &:nth-of-type(1){
         transform: translate3d(0,0,0);
          opacity: 1;
      }
      &:nth-of-type(2){
         transform: translate3d(0,0,0);
         transition-delay:.3s;
          opacity: 1;
      }
      &:nth-of-type(3){
         transform: translate3d(0,0,0);
         transition-delay:.3s;
          opacity: 1;
      }
      
    }
  }

.partner {
  padding: 124px 0 130px 0;
  .smalltitle {
    font-size: 38px;
    color: rgba(0, 13, 76, 1);
    line-height: 1;
    margin-bottom: 25px;
    &:last-of-type{
      margin-bottom: 0;
    }
  }
  .partnerContent {
    padding:80px 65px 0 65px;
    display: flex;
    justify-content: center;
    .partItem {
      cursor: pointer;
      width:360px;     
      height:300px;
      margin-right:50px;
      padding-top: 40px;
      border-radius:4px;
      box-shadow:2px 3px 18px rgba(217,233,255,0.75);
      transition: all 0.3s linear;
      transform: translate3d(0,100px,0);
      opacity: 0;
      .img_box{
         height: 98px;
         margin-bottom: 40px;
         background-position: center center;
         background-repeat: no-repeat;
      }
      &:last-of-type{
        margin-right: 0
      }
      .content{
        font-size:24px;
        font-family:SourceHanSansCN-Light;
        color:rgba(125,132,150,1);
        line-height:1;
        &:first-of-type{
          margin-bottom: 18px;
        }
      }
    }
  }
}
.experience {
  padding: 144px 0 134px 0;
  background: linear-gradient(#f8fafd 0%, #fff 30%);
  min-width: 1310px;
 .experienceWrap{
   display: flex;
   align-items: center;
   padding: 0 65px;
  .rightpart {
    transition: all 0.5s ease-in-out;
    transform: translate3d(200px,0,0);
    opacity: 0;
  }
  .leftpart {
    transition: all 0.5s ease-in-out;
    transform: translate3d(-200px,0,0);
    opacity: 0;
    margin-right: 192px;
    .left_item {
      text-align: left;
      font-size:40px;
      font-family:SourceHanSansCN-ExtraLight;
      color:rgba(0,13,76,1);
      line-height:60px;
    }
    .left_button {
      margin-top: 68px;
      display: flex;
      .button_item {
        color: #ffffff;
        background: #388bff;
        width:126px;
        height:44px;
        line-height: 44px;
        background:rgba(55,116,248,1);
        border-radius:20px;
        margin-right: 60px;
        &:last-of-type{
          margin-right: 0;
        }
      }
    }
  }
 }
}
.case{
  background: linear-gradient(#f8fafd 0%, #fff 20%);
  padding: 150px 0 93px 0;
  min-width:1310px;
  .moreCase{
    font-size:18px;
    font-family:SourceHanSansCN-Light;
    color:rgba(55,116,248,1);
    line-height:1;
    margin-top: 50px;
    span{
      cursor: pointer;
    }
  }
  .caseTitle{
    font-size:38px;
    font-family:SourceHanSansCN-ExtraLight;
    color:rgba(0,13,76,1);
    line-height:1;
    margin-bottom: 68px;
  }
   .caseImgBox {
      padding: 0 8px;
      position: relative;
      height: 231px;
      .imgBtn {
        position: absolute;
        z-index: 2;
        width: 30px;
        height: 60px;
        top: 50%;
        color: #8b91a1;
        margin-top: -30px;
        font-size: 35px;
        line-height: 65px;
        cursor: pointer;
        &.pre {
          left: 0;
        }
        &.next {
          right: 0;
        }
        &.disabled {
          color: #f0f0f3;
        }
      }
      .caseImgView {
        width: 1260px;
        overflow: hidden;
        height: 231px;
        margin: 0 auto;
        ul.imgList {
          height: 100%;
          float: left;
          transform: translateZ(0);
          transition: transform 0.3s ease-in-out;
          li.imgListItem{
            display: inline-block;
            height: 100%;
            width:370px;
            margin: 0 25px;
            background-position: center center;
            background-size: contain;
          }
        }
      }
    }
  }


</style>

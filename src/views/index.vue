<template>
  <div class="index">
    <!-- <h3-banner :bgUrl="require('../assets/img/banner.png')">

    </h3-banner> -->
    <div>
      <p class="introduce">{{ maintitle }}</p>
      <p class="subtitle">{{mainsubtitle}}</p>
      <div class="phonepart">
        <div v-show='showpart' class="hrmpart">
          <div>
            <img src="../assets/img/02.png" alt="">
          </div>
          <div class="item_name">{{hrmmsg.name}}</div>
          <div class="item_content">{{hrmmsg.content}}</div>
          <div class="item_fun1">{{hrmmsg.func1}}</div>
          <div class="item_fun1">{{hrmmsg.func2}}</div>
          <a-button class="morebtn">查看更多</a-button>
        </div>
        <div class="phone">
          <img src="../assets/img/phone.png">
        </div>
        <div v-show='showpart'>
          <div class="crmpart">
            <div>
              <img src="../assets/img/01.png" alt="">
            </div>
            <div class="item_name">{{crmmsg.name}}</div>
            <div class="item_content">{{crmmsg.content}}</div>
            <div class="item_fun1">{{crmmsg.func1}}</div>
            <div class="item_fun1">{{crmmsg.func2}}</div>
            <a-button class="morebtn">查看更多</a-button>
          </div>
          <div class="terppart">
            <div>
              <img src="../assets/img/03.png" alt="">
            </div>
            <div class="item_name">{{terpmsg.name}}</div>
            <div class="item_content">{{terpmsg.content}}</div>
            <div class="item_fun1">{{terpmsg.func1}}</div>
            <div class="item_fun1">{{terpmsg.func2}}</div>
            <a-button class="morebtn">查看更多</a-button>
          </div>
        </div>
      </div>
    </div>
    <div class="part2">
      <p class="smalltitle">{{smalltitle1}}</p>
      <p class="smalltitle">{{smallsubtitle1}}</p>
      <div class="part2_content">
        <div class="part_item" v-for="(item,index) in part2list" :key="index">
          <div class="img_box">
            <img :src="item.imgurl">
          </div>
          <p class="content">{{item.name}}</p>
          <p class="content">{{item.detail}}</p>
        </div>
      </div>
    </div>
    <div class="part3">
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
        <img src="../assets/img/bg.png">
      </div>
    </div>
    <div class="part4">
      <p class="part4_title">专注服务中小企业 持续创造商业价值</p>
      <img src="../assets/img/company01.png">
      <img src="../assets/img/company02.png">
      <img src="../assets/img/company03.png">
      <div class="lookmore">
        <a href="">更多样例&nbsp&nbsp&gt</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      showpart: false,
      maintitle: '商业有战场，定胜有决招',
      mainsubtitle: '决招——中小企业创新型Saas服务运营商',
      smalltitle1: '阿里巴巴赋能决招',
      smallsubtitle1: '引领企业进入智能移动办公新时代',
      hrmmsg: {
        name: '决招HRM',
        content: '快速打造中小企业超级人事部',
        func1: '通过员工花名册和薪酬管理等信息化解决方案',
        func2: '全面提升HR工作效率,降低员工成本'
      },
      crmmsg: {
        name: '决招CRM',
        content: '专业易用的客户管理利器,赋能团队高效产出！',
        func1: '以高效的销售管理流程为驱动,精准把每个销售节点',
        func2: '提高团队整体销售水平,全面提升企业销售业绩'
      },
      terpmsg: {
        name: '决招进销存',
        content: '财/物/供/销一体化,轻松管理有决招',
        func1: '帮助企业改善业务流程,实现商品从采购、入库、销售、财',
        func2: '财务的全流程信息化管理,节约运营成本,提高运作效率'
      },
      part2list: [
        {
          imgurl: require('../assets/img/partner.png'),
          name: '阿里巴巴合作商',
          detail: '5000 万A+轮战略投资'
        },
        {
          imgurl: require('../assets/img/dinglog.png'),
          name: '钉钉应用市场',
          detail: '首家四星级定制服务商'
        },
        {
          imgurl: require('../assets/img/yun.png'),
          name: '阿里云托管数据',
          detail: '企业信息高安全保障'
        }
      ],
      easyusedmsg: '决招产品操作便捷、容易上手',
      freemsg: '立刻获取15天免费体验权益',
      orderEventList: [{}]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 10) {
        this.showpart = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index {
  margin-top: 109px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
}
.introduce {
  font-size: 40px;
  font-family: SourceHanSansCN-ExtraLight;
  color: rgba(0, 13, 76, 1);
  margin-bottom: 39px;
  line-height: 1;
}
.subtitle {
  font-size: 20px;
  font-family: SourceHanSansCN-ExtraLight;
  color: rgba(125, 132, 150, 1);
  margin-bottom: 0;
}

.phone {
  margin-top: 212px;
}
.phonepart {
  height: 930px;
  display: flex;
  justify-content: center;
}
.part2 {
  margin-top: 124px;
  .smalltitle {
    font-size: 38px;
    color: rgba(0, 13, 76, 1);
    line-height: 1;
    margin-bottom: 25px;
  }
  .part2_content {
    margin-top: 80px;
    height: 300px;
    display: flex;
    justify-content: center;
    .part_item {
      width: 360px;
    }
  }
}
.part3 {
  margin-top: 130px;
  height: 903px;
  .rightpart {
    float: right;
    margin-top: 144px;
    margin-right: 78px;
  }
  .leftpart {
    float: left;
    margin-top: 277px;
    margin-left: 78px;
    .left_item {
      font-size: 40px;
      margin-bottom: 18px;
      line-height: 1;
      text-align: left;
      color: rgba(0, 13, 76, 1);
    }
    .left_button {
      margin-top: 68px;
      display: flex;
      .button_item {
        border-radius:25px;
        color: #ffffff;
        background: #388bff;
        width: 126px;
        height: 44px;
        margin-right: 60px;
      }
    }
  }
}
.part4_title {
  font-size: 38px;
  line-height: 1;
  margin-bottom: 68px;
}

.hrmpart {
  align-self: stretch;
  margin-top: 175px;
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // animation: vanishIn 3s infinite alternate;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}

.crmpart {
  margin-top: 61px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}
.terppart {
  margin-top: 347px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}
.item_name {
  font-size: 30px;
  line-height: 1;
  margin-bottom: 18px;
}
.item_content {
  font-size: 18px;
  line-height: 1;
  margin-bottom: 15px;
}
.content {
  font-size: 24px;
  margin-bottom: 18px;
  line-height: 1;
  &:last-of-type {
    margin-bottom: 0;
  }
}
.item_fun1 {
  font-size: 14px;
  line-height: 1;
  color: rgba(125, 132, 150, 1);
  margin-bottom: 5.5px;
}

.morebtn {
  background: #388bff;
  color: #fff;
  margin-top: 14.5px;
}

.img_box {
  height: 178px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lookmore {
  margin-top: 50px;
}
/* export keyframes  */
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

//test
</style>

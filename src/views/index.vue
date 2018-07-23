<template>
  <div class="index">
    <div>
      <p class="introduce">{{ maintitle }}</p>
      <p class="subtitle">{{mainsubtitle}}</p>
      <div class="part1">
        <div v-show='showpart' class="hrmpart">
          <div class="item_name">{{hrmmsg.name}}</div>
          <div class="item_content">{{hrmmsg.content}}</div>
          <div class="item_fun1">{{hrmmsg.func1}}</div>
          <div class="item_fun2">{{hrmmsg.func2}}</div>
          <div class="item_button">
            <a-button style="background:#388bff;color:#fff">查看更多</a-button>
          </div>
        </div>
        <div class="phone">
          <img src="../assets/img/phone.png">
        </div>
        <div v-show='showpart'>
          <div class="crmpart">
            <div class="item_name">{{crmmsg.name}}</div>
            <div class="item_content">{{crmmsg.content}}</div>
            <div class="item_fun1">{{crmmsg.func1}}</div>
            <div class="item_fun2">{{crmmsg.func2}}</div>
            <div class="item_button">
              <a-button style="background:#388bff;color:#fff">查看更多</a-button>
            </div>
          </div>
          <div class="terppart">
            <div class="item_name">{{terpmsg.name}}</div>
            <div class="item_content">{{terpmsg.content}}</div>
            <div class="item_fun1">{{terpmsg.func1}}</div>
            <div class="item_fun2">{{terpmsg.func2}}</div>
            <div class="item_button">
              <a-button style="background:#388bff;color:#fff">查看更多</a-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin-top:125px">
      <p class="smalltitle">{{smalltitle1}}</p>
      <p class="smalltitle">{{smallsubtitle1}}</p>
      <div class="part2">
        <div class="part-item" v-for="(item,index) in part2list" :key="index">
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
        <img style="height:460px" src="../assets/img/bg.png">
      </div>
    </div>
    <div class="part4">
      <p style="font-size:38px;">专注服务中小企业 持续创造商业价值</p>
      <img src="../assets/img/company01.png">
      <img src="../assets/img/company02.png">
      <img src="../assets/img/company03.png">
      <div style="margin-top:50px">
        <a href="">查看更多</a>
      </div>
    </div>
    <div class="part5">
     
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
      mainsubtitle: '决招--中小企业创新型Saas服务运营商',
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
      freemsg: '立刻获取15天免费体验权益'
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
  margin-top: 158px;
  width: 1160px;
  margin-left: auto;
  margin-right: auto;
}
.introduce {
  font-size: 40px;
  font-family: SourceHanSansCN-ExtraLight;
  color: rgba(0, 13, 76, 1);
}
.subtitle {
  font-size: 20px;
  font-family: SourceHanSansCN-ExtraLight;
  color: rgba(125, 132, 150, 1);
  margin-top: 39px;
}
.smalltitle {
  font-size: 25px;
  color: rgba(0, 13, 76, 1);
}
.phone {
  margin-top: 100px;
}
.part1 {
  height: 850px;
  display: flex;
  justify-content: center;
}
.part2 {
  margin-top: 80px;
  height: 300px;
  display: flex;
  justify-content: center;
}
.part3 {
  margin-top: 130px;
  height: 903px;
}
.left_button {
  margin-top: 68px;
  display: flex;
}
.button_item {
  color: #ffffff;
  background: #388bff;
  width: 126px;
  height: 44px;
  margin-right: 60px;
}
.left_item {
  font-size: 40px;
  margin-bottom: 18px;
  line-height: 1;
  text-align: left;
  color: rgba(0, 13, 76, 1);
  &:last-of-type {
    margin-bottom: 0;
  }
}
.rightpart {
  float: right;
  margin-top: 144px;
}
.leftpart {
  float: left;
  margin-top: 277px;
}
.part-item {
  width: 360px;
}
.hrmpart {
  align-self: stretch;
  margin-top: 100px;
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // animation: vanishIn 3s infinite alternate;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}

.crmpart {
  align-self: stretch;
  margin-top: 50px;
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}
.terppart {
  align-self: stretch;
  margin-top: 247px;
  width: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: bounceIn 1s ease-in-out 0s 1 normal both;
}
.item_name {
  font-size: 30px;
  line-height: 40px;
}
.item_content {
  font-size: 15px;
  line-height: 40px;
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
  line-height: 24px;
  color: rgba(125, 132, 150, 1);
}

.item_fun2 {
  font-size: 14px;
  line-height: 40px;
  color: rgba(125, 132, 150, 1);
}
.item_button {
  font-size: 14px;
  line-height: 30px;
}
.img_box {
  height: 178px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>

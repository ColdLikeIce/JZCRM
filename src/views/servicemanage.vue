<!--  -->
<template>
  <div class="h_1750">
    <p class="title">
      {{title}}
    </p>
    <div class="totalpart">
      <div v-for="(item,index) in list" :key="index">
        <div v-if="index%2==0" class="partitem">
          <div class="sleftpart">
            <img :src="item.imgurl">
          </div>
          <div class="srightpart">
            <div class="simgurl">
              <img :src="item.numberurl">
            </div>
            <div class="sbottom">
              <div class="theme">
                {{item.title}}
              </div>
              <div class="detail">
                {{item.content}}
              </div>
            </div>
          </div>
        </div>
        <div v-else class="partitem">
          <div class="dleftpart">
            <div class="dimgurl">
              <img :src="item.numberurl">
            </div>
            <div class="dbottom">
              <div class="theme">
                {{item.title}}
              </div>
              <div class="detail">
                {{item.content}}
              </div>
            </div>
          </div>
          <div class="drightpart">
            <img :src="item.imgurl">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      title: '五大服务保障，只为您更安心的使用决招产品',
      list: [
        {
          imgurl: require('../assets/img/ServiceManage/icon_01.png'),
          numberurl: require('../assets/img/ServiceManage/01.png'),
          title: '快速响应保障',
          content:
            ' 7*12小时300服务热线，提供产品咨询，使用指导，售后支持全流程 服务。帮助您在最短时间内轻松解决问题，我们用心让你更放心。'
        },
        {
          imgurl: require('../assets/img/ServiceManage/icon_02.png'),
          numberurl: require('../assets/img/ServiceManage/02.png'),
          title: '技术支持保障',
          content:
            '来自腾讯、阿里、金蝶的研发管理人员，170余员的技术工程师团队，为研发创新、产品优化提供技术支持，只为您更好的使用体验。'
        },
        {
          imgurl: require('../assets/img/ServiceManage/icon_03.png'),
          numberurl: require('../assets/img/ServiceManage/03.png'),
          title: '本地网络化保障',
          content:
            '目前已经建立深圳、北京、上海、广州、杭州、成都、山东、武汉等八大直属机构，本地化服务网络辐射全国54个中大城市。'
        },
        {
          imgurl: require('../assets/img/ServiceManage/icon_04.png'),
          numberurl: require('../assets/img/ServiceManage/04.png'),
          title: '落地交付保障',
          content:
            '深圳决招网络科技有限公司是深圳奥哲网络科技有限公司的全资子公司，奥哲网络自2010年以来为近5万家企业提供信息化管理系统和解决方案，获得30%的中国五百强企业选择，100%项目成功交付，获得阿里巴巴5000万A+轮战略投资。'
        },
        {
          imgurl: require('../assets/img/ServiceManage/icon_05.png'),
          numberurl: require('../assets/img/ServiceManage/05.png'),
          title: '信息安全保障保障',
          content:
            '与阿里钉钉深度合作，阿里云托管企业应用与数据，采用高质量的多层安全架构，与DDoS防护，WAF和虚拟防火墙技术为支撑，保障数据安全与高可用性。'
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.h_1750 {
  margin-top: 100px;
  height: 1750px;
}
.title {
  font-size: 40px;
  color: rgba(0, 13, 76, 1);
}
.partitem {
  margin-top: 85px;
  height: 185px;
}
.totalpart {
  margin-top: 114px;
}
.sleftpart {
  float: left;
  margin-left: 182px;
  height: 200px;
}
.dleftpart {
  float: left;
  margin-left: 74px;
  height: 200px;
}
.sbottom {
  clear: both;
  text-align: left;
  margin-left: 322px;
}
.dbottom {
  clear: both;
  text-align: left;
  margin-left: 101px;
}
.srightpart {
  float: left;
}
.drightpart {
  float: left;
  margin-left: 232px;
}
.simgurl {
  float: left;
  margin-left: 295px;
}
.dimgurl {
  float: left;
  margin-left: 74px;
}
.theme {
  font-size: 26px;
  line-height: 1;
  margin-bottom: 32px;
}
.detail {
  width: 436px;
  font-size: 14px;
  height: 37px;
  line-height: 22px;
}
</style>
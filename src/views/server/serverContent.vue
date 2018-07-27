<!--  -->
<template>
  <div>
    <h3-banner :bgUrl="bannerimg"></h3-banner>
    <div class="service wraper">
      <p class="title">
        {{title}}
      </p>
      <div class="totalpart">
        <div class="partitem" v-for="(item,index) in list" :key="index">
          <div v-if="index%2==0" class="spart">
            <div class="sleftpart">
              <img :src="item.imgurl">
            </div>
            <div class="srightpart">
              <div class="simgurl">
                <img :src="item.numberurl">
              </div>
              <div class="sbottom">
                <p>
                  {{item.title}}
                </p>
                <p>
                  {{item.content}}
                </p>
              </div>
            </div>
          </div>
          <div v-else class="spart">
            <div class="srightpart dleftpart">
              <div class="simgurl">
                <img :src="item.numberurl">
              </div>
              <div class="sbottom">
                <p>
                  {{item.title}}
                </p>
                <p>
                  {{item.content}}
                </p>
              </div>
            </div>
            <div class="sleftpart drightpart">
              <img :src="item.imgurl">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import h3Banner from '../../components/common/h3-banner'
export default {
  data() {
    return {
      bannerimg: '/static/img/ServiceManage/servicecontent/banner.png',
      title: '五大服务保障，只为您更安心的使用决招产品',
      list: [
        {
          imgurl: '/static/img/ServiceManage/servicecontent/icon_01.png',
          numberurl: '/static/img/ServiceManage/servicecontent/01.png',
          title: '快速响应保障',
          content:
            ' 7*12小时300服务热线，提供产品咨询，使用指导，售后支持全流程 服务。帮助您在最短时间内轻松解决问题，我们用心让你更放心。'
        },
        {
          imgurl: '/static/img/ServiceManage/servicecontent/icon_02.png',
          numberurl: '/static/img/ServiceManage/servicecontent/02.png',
          title: '技术支持保障',
          content:
            '来自腾讯、阿里、金蝶的研发管理人员，170余员的技术工程师团队，为研发创新、产品优化提供技术支持，只为您更好的使用体验。'
        },
        {
          imgurl: '/static/img/ServiceManage/servicecontent/icon_03.png',
          numberurl: '/static/img/ServiceManage/servicecontent/03.png',
          title: '本地网络化保障',
          content:
            '目前已经建立深圳、北京、上海、广州、杭州、成都、山东、武汉等八大直属机构，本地化服务网络辐射全国54个中大城市。'
        },
        {
          imgurl: '..//static/img/ServiceManage/servicecontent/icon_04.png',
          numberurl: '..//static/img/ServiceManage/servicecontent/04.png',
          title: '落地交付保障',
          content:
            '深圳决招网络科技有限公司是深圳奥哲网络科技有限公司的全资子公司，奥哲网络自2010年以来为近5万家企业提供信息化管理系统和解决方案，获得30%的中国五百强企业选择，100%项目成功交付，获得阿里巴巴5000万A+轮战略投资。'
        },
        {
          imgurl: '/static/img/ServiceManage/servicecontent/icon_05.png',
          numberurl: '/static/img/ServiceManage/servicecontent/05.png',
          title: '信息安全保障保障',
          content:
            '与阿里钉钉深度合作，阿里云托管企业应用与数据，采用高质量的多层安全架构，与DDoS防护，WAF和虚拟防火墙技术为支撑，保障数据安全与高可用性。'
        }
      ]
    }
  },
  components: {
    h3Banner
  }
}
</script>
<style lang='less' scoped>
.service {
  margin-top: 100px;
}
.title {
  font-size: 40px;
  color: rgba(0, 13, 76, 1);
}

.totalpart {
  margin-top: 114px;
  display: flex;
  flex-direction: column;
  .partitem {
    margin: 0 103px;
    margin-top: 85px;
    &:last-of-type {
      margin-bottom: 167px;
    }
    .spart {
      display: flex;
      align-items: center;
      .sleftpart {
        margin-left: 80px;
        &.drightpart {
          margin-left: 232px;
        }
      }
      .srightpart {
        width: 466px;
        margin-left: 295px;
        display: flex;
        flex-direction: column;
        &.dleftpart {
          margin-left: 0px;
        }
      }
    }
  }
}
.simgurl {
  text-align: left;
}
.sbottom {
  text-align: left;
  margin-left: 26px;
  p {
    &:first-of-type {
      width: 157px;
      font-size: 26px;
      font-family: SourceHanSansCN-Light;
      color: rgba(0, 13, 76, 1);
      line-height: 1;
      margin-bottom: 32px;
    }
    &:last-of-type {
      width: 436px;
      font-size: 14px;
      font-family: SourceHanSansCN-Light;
      color: rgba(125, 132, 150, 1);
      line-height: 22px;
    }
  }
}
</style>
<!--  -->
<template>
  <div>
    <h3-banner :bgUrl="bannerimg"></h3-banner>
    <div class="service wraper">
      <div class="tabbar">
        <ul class="wraper tabList">
          <li :class="{'active':defaultIndex===index}" v-for="(item,index) in tablist" :key="index" @click="changetab(item)">{{item.name}}</li>
        </ul>
      </div>
      <div>
        <ul class="pricepart">
          <li v-for="(item,index) in resource.typelist" :key="index" :class="{'four_item':resource.typelist.length<3}" class="price_item">
            <h4>
              {{item.type}}
            </h4>
            <p>
              {{item.time}}
            </p>
            <p>
              <span>¥</span>{{item.pricelist[item.defaulttype]}}
            </p>
            <div class="drow_select">
              <a-select :defaultValue="item.pricelist[0].key" @change="handleChange">
                <a-select-option v-for="(peoitem,idx) in item.pricelist" :value="peoitem.key" :key="idx">{{peoitem.value}}</a-select-option>
              </a-select>
            </div>
            <a-button>
              了解详情
            </a-button>
          </li>
        </ul>
        <div class="usedpart">
          <p>免费15天试用</p>
          <a-button>
            立即体验
          </a-button>
        </div>
        <div class="other">
          <h4>其他说明</h4>
          <div>
            <table class="table">
              <tr>
                <td>定价额外说明</td>
                <td>根据产品不同的实施程度收取实施费和服务费，具体请热线咨询400-1399-566</td>
              </tr>
              <tr>
                <td>试用策略</td>
                <td>试用15天，到期后可以在钉钉应用市场进行购买，如有疑问请联系客服400-1399-566</td>
              </tr>
              <tr>
                <td>售后服务</td>
                <td>提供7*12小时服务，服务时间：8：00-20：00 服务热线：400-139-9566 </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="bottompart">
          <h3-banner class="h_900" :bgUrl="bottomimg">
            <div class="contract">
              <h4>更多优惠，联系我们</h4>
              <table class="contable">
                <tr>
                  <td> <img src="/static/img/ServiceManage/serviceprice/jxc/name.png" alt="">
                    <input type="text" placeholder="姓名"></td>
                  <td>
                    <img src="/static/img/ServiceManage/serviceprice/jxc/com.png" alt="">
                    <input type="text" placeholder="公司"></td>
                </tr>
                <tr>
                  <td>
                    <img src="/static/img/ServiceManage/serviceprice/jxc/email.png" alt="">
                    <input type="text" placeholder="工作邮箱"></td>
                  </td>
                  <td>
                    <img src="/static/img/ServiceManage/serviceprice/jxc/phone.png" alt="">
                    <input type="text" placeholder="手机号码"></td>
                  </td>
                </tr>
                <tr>
                  <td class="remarktd">
                    <input class="remark" type="text">
                  </td>
                </tr>
                <tr>
                  <a-button>
                    发送
                  </a-button>
                </tr>
              </table>

            </div>
          </h3-banner>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import staticData from './static'
import h3Banner from '../../components/common/h3-banner'
export default {
  name: 'ServerPrice',
  data() {
    return {
      bannerimg: '/static/img/ServiceManage/serviceprice/jxc/banner.png',
      bottomimg: '/static/img/ServiceManage/serviceprice/jxc/bg.png',
      tablist: [
        {
          id: 0,
          name: '决招CRM',
          type: 'crm'
        },
        {
          id: 1,
          name: '决招HRM',
          type: 'hrm'
        },
        {
          id: 2,
          name: '决招进销存',
          type: 'jxc'
        }
      ],
      resource: staticData.crm,
      defaultIndex: 0,
      // defaulttype:'员工数量1-10',
      pricelist: [
        {
          type: '标准版',
          time: '1年',
          price: '4800'
        },
        {
          type: '标准版',
          time: '2年',
          price: '9600'
        }
      ]
    }
  },

  components: {
    h3Banner
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    changetab(tab) {
      this.defaultIndex = tab.id;
      this.resource = staticData[tab.type]
    },
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>
<style lang='less' scoped>
.tabbar{
    border-bottom: 1px solid rgba(210,210,210,1);
    .tabList{
      display: flex;
      justify-content: center;
      height: 85px;
      line-height: 85px;
      font-size:18px;
      font-family:SourceHanSansCN-Light;
      color:rgba(117,134,165,1);
      li{
        cursor: pointer;
        padding:  0 50px;
        margin: 0 50px;
        &.active{
          color:#fff;
          background: #3774F8;
        }
      }
    }
  }
.pricepart {
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  .price_item {
    flex: 1;
    margin: 0 40px;
    &.four_item {
      padding: 50px 121px;
    }
    p {
      font-size: 60px;
      &:first-of-type {
        margin-top: 39px;
        line-height: 30px;
        font-size: 30px;
      }
      &:last-of-type {
        margin-top: 56px;
      }
      span {
        vertical-align: top;
        margin-right: 10px;
        font-size: 30px;
      }
    }
    button {
      color: #ffffff;
      background: #388bff;
      width: 126px;
      height: 44px;
      margin-top: 50px;
    }
    .drow_select {
      margin-top: 58px;
    }
  }
  h4 {
    font-size: 30px;
    line-height: 90px;
    background: #00b2ff;
    color: #ffffff;
  }
}
.usedpart {
  margin-top: 63px;
  margin-left: 50px;
  margin-right: 50px;
  // padding: 63px 50px;
  display: flex;
  align-items: center;
  border-top: solid rgba(55, 116, 248, 1);
  p {
    font-size: 40px;
    margin-left: 335px;
  }
  button {
    border-radius: 25px;
    color: #ffffff;
    background: #388bff;
    width: 180px;
    height: 52px;
    margin-left: 90px;
  }
}
.other {
  margin-top: 60px;
  margin-left: 50px;
  height: 327px;
  h4 {
    font-size: 40px;
    line-height: 60px;
    margin-top: 40px;
  }
  .table {
    width: 1093px;
    margin: 39px auto 0 auto;
    border: 1px solid #d2d2d2;
    tr {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #d2d2d2;
      &:last-of-type {
        border-bottom: none;
      }
      td {
        border-right: 1px solid #d2d2d2;
        &:first-of-type {
          text-align: center;
          width: 192px;
          font-size: 20px;
          font-family: SourceHanSansCN-Light;
          color: rgba(3, 15, 75, 1);
        }
        &:last-of-type {
          text-indent: 30px;
          width: 901px;
          font-size: 16px;
          font-family: SourceHanSansCN-Light;
          color: rgba(120, 135, 164, 1);
          text-align: left;
          border-bottom: none;
        }
      }
    }
  }
}
.bottompart {
  margin-top: 120px;
  display: flex;
  .h_900 {
    height: 900px;
  }
  .contract {
    margin: 120px auto 50px auto;
    width: 1180px;
    height: 660px;
    background: #ffffff;
    // display: flex;
    h4 {
      padding-top: 60px;
      text-align: center;
      font-size: 40px;
      font-family: SourceHanSansCN-ExtraLight;
      color: rgba(0, 13, 76, 1);
    }
    .contable {
      width: 885px;
      margin: 59px auto 0 auto;
      tr {
        margin-bottom: 20px;
        display: flex;
        &:last-of-type {
          margin-bottom: none;
        }
        button {
          width: 885px;
          height: 60px;
          background: #1f72ff;
          color: #d2d2d2;
        }
        td {
          border: 1px solid #dadada;
          flex: 1;
          width: 421px;
          &:first-of-type {
            margin-right: 43px;
          }
          input {
            font-size: 18px;
            height: 61px;
            width: 389px;
          }

          .remark {
            border: 1px solid #dadada;
            width: 885px;
            height: 150px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
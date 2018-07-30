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
      <ul class="pricepart">
        <li v-for="(item,index) in resource.typelist" :key="index" :class="{'four_item':resource.typelist.length<3}" class="price_item">
          <h4 :class="{'behind':index>1}">
            {{item.type}}
          </h4>
          <p>
            {{item.time}}
          </p>
          <p>
            <span>¥</span>{{item.price}}
          </p>
          <div class="drow_select">
            <a-select class="selectOption" :class="{'selectOptionColor':index>1}" :defaultValue="item.pricelist[item.selectIndex].key" :key="item.id" @change="selectChange">
              <a-select-option v-for="(peoitem,idx) in item.pricelist" :value="peoitem.key" :index="index" :key="idx">{{peoitem.value}}</a-select-option>
            </a-select>
          </div>
          <a-button :class="{'behind':index>1}">
            了解详情
          </a-button>
        </li>
      </ul>
      <div class="userpart">
        <div class="usercontent">
          <p>免费15天试用</p>
          <a-button @click="download">
            立即体验
          </a-button>
        </div>
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
    </div>
    <div class="bottompart">
      <h3-banner class="h_900" :bgUrl="bottomimg">
        <div class="contract">
          <h4>更多优惠，联系我们</h4>
          <table class="contable">
            <tr>
              <td>
                <img src="/static/img/ServiceManage/serviceprice/jxc/name.png" alt="">
                <input type="text" v-model="name" placeholder="姓名">
              </td>
              <td>
                <img src="/static/img/ServiceManage/serviceprice/jxc/com.png" alt="">
                <input type="text" v-model="company" placeholder="公司"></td>
            </tr>
            <tr>
              <td>
                <img src="/static/img/ServiceManage/serviceprice/jxc/email.png" alt="">
                <input type="email" v-model="email" placeholder="工作邮箱"></td>
              </td>
              <td>
                <img src="/static/img/ServiceManage/serviceprice/jxc/phone.png" alt="">
                <input type="number" v-model="phone" placeholder="手机号码"></td>
              </td>
            </tr>
            <tr>
              <td class="remarktd">
                <textarea class="remark" v-model="remark" placeholder="请输入留言..." type="text" />
              </td>
            </tr>
            <tr>
              <a-button  :loading="loading" @click.native="submitTab" type="primary">
                发送
              </a-button>
            </tr>
          </table>

        </div>
      </h3-banner>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import staticData from './static';
import h3Banner from '../../components/common/h3-banner';

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
      data: {},
      resource: {},
      defaultIndex: 0,
      name:'',
      phone:'',
      email:'',
      company:'',
      remark:'',
      loading:false
    }
  },

  components: {
    h3Banner
  },

  methods: {
    download() {
      this.$router.push({ path: '/download' })
    },
    changetab(tab) {
      this.defaultIndex = tab.id
      this.resource = this.data[tab.type]
    },
    selectChange(val, vm) {
      let index = vm.data.attrs.index
      this.resource.typelist[index].price = val
      this.resource.typelist[index].selectIndex = vm.key
    },
    deepClone(obj) {
      let newObj = obj instanceof Array ? [] : {}
      for (let i in obj) {
        newObj[i] = typeof obj[i] == 'object' ? this.deepClone(obj[i]) : obj[i]
      }
      return newObj
    },
    submitTab() {
      if(this.loading){
        this.$message.warning('请勿重复提交');
        return false
      }
      let param = {
        name:this.name,
        phone:this.phone,
        email:this.email,
        company:this.company,
        remark:this.remark
      }
      if(this.name.trim()===''){
        this.$message.error('请输入姓名');
      }else if(this.phone.trim().length!==11){
        this.$message.error('请输入正确的手机号码');
      }
       this.loading = true;
       
       axios.post('../Home/WriteLog',param).then(data=>{
        if(data.data.Result) {
          this.loading = false;
          this.$message.success('提交成功');
        }else {
          this.loading = false;
        }
       }).catch(error=>{ 
          this.loading = false;
       })
    }
},
  created() {
    this.data = this.deepClone(staticData)
    this.resource = this.data.crm
  }
}
</script>
<style lang='less' scoped>
.tabbar {
  border-bottom: 1px solid rgba(210, 210, 210, 1);
  .tabList {
    display: flex;
    justify-content: center;
    height: 85px;
    line-height: 85px;
    font-size: 18px;
    font-family: SourceHanSansCN-Light;
    color: rgba(117, 134, 165, 1);
    li {
      cursor: pointer;
      padding: 0 50px;
      margin: 0 50px;
      &.active {
        color: #fff;
        background: #3774f8;
      }
    }
  }
}
.pricepart {
  margin: 0 auto;
  width: 1180px;
  margin-top: 90px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  .price_item {
    flex: 1;
    margin: 0 23px;
    border-radius: 8px;
    box-shadow: 2px 3px 18px rgba(217, 233, 255, 0.75);
    cursor: pointer;
    &:first-of-type {
      margin-left: 0px;
    }
    &:last-of-type {
      margin-right: 0px;
    }
    &.four_item {
      margin-left: 158px;
      &:first-of-type {
        margin-left: 158px;
        margin-right: 143px;
      }
      &:last-of-type {
        margin-left: 0px;
        margin-right: 158px;
      }
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
      background: -webkit-linear-gradient(left, #0070ff, #00bcff);
      width: 126px;
      height: 44px;
      margin-top: 50px;
      margin-bottom: 40px;
      &.behind {
        background: -webkit-linear-gradient(left, #2dd4ff, #34e8ff);
      }
    }
    .drow_select {
      margin-top: 58px;
      .selectOption {
        &.selectOptionColor {
          & /deep/ .ant-select-selection {
            color: #67d1fc;
            & .ant-select-arrow:before {
              color: #67d1fc;
            }
          }
        }
        & /deep/ .ant-select-selection {
          border: none;
          outline: none;
          box-shadow: none;
          color: #3774f8;
          & .ant-select-arrow:before {
            content: '\E606';
            color: #3774f8;
          }
        }
      }
    }
    h4 {
      font-size: 30px;
      line-height: 90px;
      background: -webkit-linear-gradient(left, #0070ff, #00bcff);
      color: #ffffff;
      &.behind {
        background: -webkit-linear-gradient(left, #2dd4ff, #34e8ff);
      }
    }
  }
}
.userpart {
  width: 1180px;
  margin: 60px auto;
  display: flex;
  align-items: center;
  border-top: 2px solid rgba(55, 116, 248, 1);
  box-shadow: 0px 0px 16px rgba(184, 214, 255, 1);
  .usercontent {
    margin: 35px 335px;
    display: flex;
    flex: 1;
    p {
      width: 239px;
      font-size: 37px;
      font-family: SourceHanSansCN-ExtraLight;
      color: rgba(0, 13, 76, 1);
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
}
.other {
  width: 1180px;
  margin: auto auto;
  box-shadow: 0px 0px 16px rgba(184, 214, 255, 1);
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 40px;
    line-height: 60px;
    margin: 40px auto;
  }
  .table {
    width: 1093px;
    margin: auto auto;
    margin-bottom: 62px;
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
    display: flex;
  }
  .contract {
    margin: auto auto;
    width: 1180px;
    box-shadow: 0px 0px 16px rgba(184, 214, 255, 1);
    background: #ffffff;
    h4 {
      padding-top: 60px;
      font-size: 40px;
      font-family: SourceHanSansCN-ExtraLight;
      color: rgba(0, 13, 76, 1);
    }
    .contable {
      width: 885px;
      margin: 59px auto;
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
          &.remarktd{
            border:none
          }
          &:first-of-type {
            margin-right: 43px;
          }
          input {
            font-size: 18px;
            height: 61px;
            width: 354px;
            border: 0;
            outline: none;
          }
          .remark {
            border: 1px solid #dadada;
            padding: 10px;
            font-size:14px;
            outline: none;
            width: 885px;
            height: 150px;
          }
          img {
            margin: 18px 18px;
          }
        }
      }
    }
  }
}
</style>
<!--  -->
<template>
  <div class="customCase">
    <h3-banner bgUrl="/static/img/custom_banner.jpg">
    <p class="slogan" >全心全意为客户解决问题<br/>是决招的使命</p>
    </h3-banner>
    <div class="tabbar">
      <ul class="wraper tabList">
        <li :class="{'active':currentId===index}" v-for="(item,index) in tabList" :key="index" @click="chekoutTab(item)">{{item.name}}</li>
      </ul>
    </div>
    <div class="w_1200 customCaseList">
     <h3custom v-for="(item,index) in resource"  :caseData="item" :key="index"></h3custom>
    </div>
  </div>
</template>

<script>
import h3custom from './h3-custom.vue';
import h3Banner from '@/components/common/h3-banner';
import staticData from './static';
export default {
  name: 'CustomCase',
  data() {
    return {
      tabList:[
        { id:0,
          name:'决招CRM',
          type:'crm'
          },
          { id:1,
          name:'决招HRM',
          type:'hrm'
          },
          { id:2,
          name:'决招进销存',
          type:'jxc'
          }
      ],
      resource:staticData.crm,
      currentId:0,
    }
  },

  components: {
    h3custom,
    h3Banner
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {
    chekoutTab(item){
      this.currentId = item.id;
      this.resource = staticData[item.type]
    }
  }
}
</script>
<style lang='less' scoped>
.customCase{
  .slogan{
    position: absolute;
    padding-left: 120px;
    left: 50%;
    top: 174px;
    text-align: left;
    font-size:40px;
    font-family:SourceHanSansCN-ExtraLight;
    color:rgba(255,255,255,1);
    line-height:80px;
  }
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
  .customCaseList{
    padding: 50px 8px 57px 8px
  }
}
</style>
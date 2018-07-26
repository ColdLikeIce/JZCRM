<!--  -->
<template>
  <div class="customCaseItem">
      <p class="companyName">{{caseData.companyName}}</p>
      <div class="flexpart v_center" :style="`margin:${caseData.marginTop}px 0 60px 0`">
        <div class="logo">
          <img  :src="caseData.img" alt="logo">
        </div>
        <div class="introduction">
          <p class="title">行业</p>
          <p style="margin-bottom:10px">{{caseData.industry}}</p>
          <p class="title" style="margin-bottom:7px;">企业介绍</p>
          <p>{{caseData.introduction}}</p>
        </div>
      </div>
      <div class="flexpart">
        <div class="defect">
           <p class="title">企业管理痛点</p>
           <ul class="contentList">
             <li class="circular" v-for="(item,index) in caseData.defect" :key="index">{{item}}</li>
           </ul>
        </div >
        <div class="effect">
           <p class="title">使用效果</p>
           <ul class="contentList">
             <li class="circular" v-for="(item,index) in caseData.effect" :key="index">{{item}}</li>
           </ul>
        </div>
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'h3-custom',
  props:{
    caseData:{
      require:true,
      type:Object
    }
  },
  data() {
    return {}
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang='less' scoped>
 .customCaseItem{
    padding: 29px 62px 56px 58px;
    margin-bottom: 50px;
    cursor: pointer;
    border-radius:8px;
    box-shadow:7px 0px 27px rgba(217,233,255,0.75);
    font-size:16px;
    font-family:SourceHanSansCN-Light;
    text-align: left;
    color:rgba(117,134,165,1);
    line-height:30px;
      .companyName{
      font-size:28px;
      color:rgba(0,13,76,1);
      line-height:1;
      text-align: center;
      }
      .flexpart{
        display: flex;
        .introduction{
          flex:1;
        }
        &.v_center{
          align-items: center;
        }
        .title{
          font-size:20px;
          color:rgba(0,13,76,1);
          line-height:23px;
          border-left: 3px solid #3774F8;
          text-indent: 12px;
        }
        .defect{
          flex:1;
          margin-right: 40px;
        }
        .effect{
          flex:1;
        }
        .contentList{
          margin-top: 26px;
        }
        .circular{
          padding-left:20px;
          position: relative;
          &::before{
            content:" ";
            position:absolute;
            width: 12px;
            height:12px;
            background: #3774F8;
            border-radius:50%;
            top: 9px;
            left: 0;
          } 
        }
      }
 }
 .logo{
   display: block;
  width:401px;
  text-align: center;
  margin-left: -15px;
        // margin-right: 85px;
      }
</style>
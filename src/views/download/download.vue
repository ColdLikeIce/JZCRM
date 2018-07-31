<!--  -->
<template>
  <div class="wraper">
    <div class="pic">
      <img src="/static/img/DowmLoad/banner.png">
    </div>
    <div class="dowmloadpart">
      <div class="itempart" v-for="(item,index) in list" :key="index">
        <img :src="item.imgurl">
        <div class="top_64">
          <img :src="item.backimgurl">
        </div>
        <p class="title">{{item.title}}</p>
        <div class="detail">
          <p>扫一扫下载</p>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          imgurl: '/static/img/DowmLoad/CRMdowmload.png',
          backimgurl: '/static/img/DowmLoad/CRM.png',
          title: '决招CRM',
          content: '全面优化企业销售流程'
        },
        {
          imgurl: '/static/img/DowmLoad/HRMdowmload.png',
          backimgurl: '/static/img/DowmLoad/HRM.png',
          title: '决招HRM',
          content: '全面优化企业HR管理流程'
        },
        {
          imgurl: '/static/img/DowmLoad/TERPdowmload.png',
          backimgurl: '/static/img/DowmLoad/Terp.png',
          title: '决招进销存',
          content: '全面优化企业进销存流程'
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.top_64 {
  margin-top: 64px;
}
.pic {
  margin-top: 141px;
}
.dowmloadpart {
  margin-top: 132px;
  margin-bottom: 252px;
  display: flex;
  align-items: center;
  .itempart {
    margin: 0 90px;
    flex: 1;
  }
  .title {
    font-size: 28px;
    line-height: 1;
  }
  .detail {
    margin-top: 35px;
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
}
</style>
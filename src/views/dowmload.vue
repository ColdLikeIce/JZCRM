<!--  -->
<template>
  <div class="h_1043">
    <div class="pic">
      <img src="../assets/img/banner.png">
    </div>
    <div class="dowmload">
      <div :class="item.class" v-for="(item,index) in list" :key="index">
        <img :src="item.imgurl">
        <div class="top_64">
          <img :src="item.backimgurl">
        </div>
        <p class="title">{{item.title}}</p>
        <div class="detail">
          <p class="content">扫一扫下载</p>
          <p class="content">{{item.content}}</p>
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
          imgurl: require('../assets/img/DowmLoad/CRMdowmload.png'),
          backimgurl: require('../assets/img/DowmLoad/CRM.png'),
          title: '决招CRM',
          content: '全面优化企业销售流程',
          class: 'leftproduct'
        },
        {
          imgurl: require('../assets/img/DowmLoad/HRMdowmload.png'),
          backimgurl: require('../assets/img/DowmLoad/HRM.png'),
          title: '决招HRM',
          content: '全面优化企业HR管理流程',
          class: 'centerproduct'
        },
        {
          imgurl: require('../assets/img/DowmLoad/TERPdowmload.png'),
          backimgurl: require('../assets/img/DowmLoad/Terp.png'),
          title: '决招进销存',
          content: '全面优化企业进销存流程',
          class: 'rightproduct'
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
.h_1043 {
  height: 1043px;
}
.top_64 {
  margin-top: 64px;
}
.pic {
  margin-top: 141px;
}
.dowmload {
  margin-top: 132px;
}
.leftproduct {
  float: left;
  margin-left: 97px;
}
.rightproduct {
  float: right;
  margin-right: 97px;
}
.centerproduct {
  float: left;
  margin-left: 150px;
}
.title {
  font-size: 28px;
  margin-bottom: 0;
  line-height: 1;
}
.detail {
  margin-top: 35px;
}
.content {
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1;
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>
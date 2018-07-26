<!--  -->
<template>
   <div  class="cardWrap">
      <img :src="cardData.img" alt="num">
      <h4 class="cardName">{{cardData.name}}</h4>
      <p class="itemTitle">{{cardData.title}}</p>
      <p class="itemContent" v-for="(item,index) in cardData.content">{{item}}</p>
      <router-link   :to="cardData.path">
        <a-button type="primary" class="more">查看更多</a-button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: "h3Card",
  props:{
    cardData:{
      require:true,
      type:Object
    }
  },
  data() {
    return {
    };
  },
}

</script>
<style lang='less' scoped>
 .cardWrap{
   position:absolute;
   top:280px;
   left: 50%;
   transform: translate3d(-50%,-50%,0) scale(0.3,0.3);
   transition: all 0.5s ease-in-out;
   opacity: 0.1;
   z-index: 2;
   background:#ffffff;
   border-radius:20px;
   box-shadow:27px 3px 57px rgba(217,233,255,0.75);
   text-align: left;
   .cardName{
      margin-top: -10px;
      font-size:30px;
      font-weight: normal;
      font-family:SourceHanSansCN-Light;
      color:rgba(0,13,76,1);
      line-height:1;
      margin-bottom: 14px;
      }
    .itemTitle{
      font-size:18px;
      font-family:SourceHanSansCN-Light;
      color:rgba(0,13,76,1);
      line-height:24px;
      margin-bottom: 4px;
    }
    .itemContent{
      font-size:14px;
      font-family:SourceHanSansCN-Light;
      color:rgba(125,132,150,1);
      line-height:26px;
    }
    .more{
      margin-top: 14px;
    }
 }
</style>
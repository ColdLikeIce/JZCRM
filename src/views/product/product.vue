<!--  -->
<template>
  <div>
    <h3-banner :bgUrl="resource.banner"></h3-banner>
    <div class="advantage wraper">
       <h3 class="advantage_title">{{resource.advantage.title}}</h3>
       <ul class="list">
         <li class="advantage_item" v-for="(item,index) in  resource.advantage.list" :key="index">
            <img :src="item.img" alt="icon">
            <h4 v-for="(sloganItem,sloganIndex) in item.slogan" :key="sloganIndex+'slogan'">{{sloganItem}}</h4>
            <p v-for="(contentItem,contentIndex) in item.content" :key="contentIndex+'content'">{{contentItem}}</p>
         </li>
       </ul>
    </div>
    <div class="core">
      <div class="w_1200">
      <h3 class="title">{{resource.core.title}}</h3>
      <p class="download" @click="download">更多功能请下载{{resource.core.type}}进行体验<a-icon type="right" /></p>
      <div class="coreList">
        <ul class="coreList_wrap" v-for="n in row" :key="n">
          <template v-for="(item,index) in resource.core.list">
            <li  v-if="n*(resource.core.rowNum)>item.id&&item.id>=(n-1)*(resource.core.rowNum)">
            <div :style="activeStyle(item.id)" class="iconBox" @click="coreSelect(item.id)">
              <img class="coreList_icon" :src="item.icon" alt="icon">
            </div>
            <p>{{item.title}}</p>
            </li>
          </template>
        </ul>
      </div>
       <div class="coreShow">
        <h4>{{coreShow.title}}</h4>
        <p>{{coreShow.introduction}}</p>
        <div class="coreImgBox">
          <span v-show="coreShow.imgList.length>1" @click="checkoutImg('pre')" class="imgBtn pre"><a-icon type="left" /></span>
          <div class="coreImgView">
           <ul class="imgList"  :style="`width:${800*coreShow.imgList.length}px;transform:translateX(${-imgindex/coreShow.imgList.length*100}%)`">
            <li class="imgListItem" v-for="(item ,index) in coreShow.imgList" :style="`background-image:url(${item})`"></li>
           </ul>
          </div>
          
           <span v-show="coreShow.imgList.length>1" @click="checkoutImg('next')" class="imgBtn next"><a-icon type="right" /></span>
        </div>
       </div>
      </div>
    </div>
    <div class="common">
      <div class="w_1200 common_wrap">
       <img class="common_img" :src="common.img" alt="img">
       <div class="common_content">
         <h3>{{common.title}}</h3>
         <p>{{common.content}}</p>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import staticData from './static';
import h3Banner  from '../../components/common/h3-banner'
export default {
  name:'h3product',
  data() {
    return {
      resource:staticData.crm,
      common:staticData.common,
      currentId:0,
      imgindex:0
    };
  },

  components: {
    h3Banner
  },

  created(){
    
  },

  computed: {
    row(){
     return Math.ceil(this.resource.core.list.length/this.resource.core.rowNum); 
    },
    coreShow(){
      return this.resource.core.list[this.currentId]
    }
  },

  watch:{
     '$route':{
                handler:function(val,oldval){
                    this.resource = staticData[val.name]
                },
                immediate:true,
            },
  },


  mounted(){
  },

  methods: {
    download(){
      this.$router.push({path:'/download'})
    },
    coreSelect(id){
     this.currentId = id
    },
    activeStyle(id){
      if(id===this.currentId){
        return{
                'background':this.resource.core.list[this.currentId].activeColor
              }
      }else{
        return
      }
    },
    checkoutImg(type){
      if(type==="pre"){
        if(this.imgindex>0){
          this.imgindex--
        }
      }else{
        if(this.imgindex<this.coreShow.imgList.length-1){
          this.imgindex++
        }  
      }
    }
  },
}

</script>
<style lang='less' scoped>
.advantage{
  padding-top:117px; 
  text-align: center;
  font-family: SourceHanSansCN,微软雅黑;
  .advantage_title{
    font-weight: normal;
    font-size:40px;
    font-family:SourceHanSansCN-ExtraLight;
    color:rgba(0,13,76,1);
    line-height:1;
    margin-bottom: 90px;
  }
  .list{
    padding: 0 25px;
    display: flex;
    justify-content:space-around;
    align-items: flex-start;
   .advantage_item{
    flex: 1;
    margin: 0 41px;
    padding: 50px 26px;
    height:464px;
    background:#fff;
    border-radius:8px;
    box-shadow:2px 3px 18px rgba(217,233,255,0.75);
    img{
      margin-bottom: 52px;
      width: 78px;
      height: 90px;
    }
    h4{
      margin: 0;
      font-size:22px;
      font-family:SourceHanSansCN-ExtraLight;
      color:rgba(0,13,76,1);
      line-height:36px;
    }
    p{
      margin: 0;
      font-size:14px;
      font-family:SourceHanSansCN-Light;
      color:rgba(125,132,150,1);
      line-height:30px;
      &:first-of-type{
        margin-top: 24px;
      }
    };
   }
  }
}
.core{
  background:linear-gradient( #F8FAFD 0%,#fff 20%);
  padding-top: 90px;
  .title{
    font-weight: normal;
    margin-bottom:60px;
    font-size:40px;
    font-family:SourceHanSansCN-ExtraLight;
    color:rgba(0,13,76,1);
    line-height:1;
  }
  .coreList_wrap{
    display: flex; 
    justify-content: center;
    align-items: center;
    margin-bottom: 52px;
    li{
      width: 87px;
      margin: 0 37px;
      font-size:16px;
      font-family:SourceHanSansCN-Light;
      color:rgba(0,13,76,1);
      line-height:1;
      .iconBox{
        cursor: pointer;
        display: inline-block;
        width: 87px;
        height: 87px;
        border-radius: 50%;
        background: #DBE0EB;
        margin-bottom: 24px;
        .coreList_icon{
        width: 87px;
        height: 87px;
        display: block;
        }
      }
    }
  }
  .download{
    text-align: center;
    cursor: pointer;
    font-size:16px;
    font-family:SourceHanSansCN-Light;
    color:rgba(55,116,248,1);
    line-height:1;
    margin-bottom: 82px;
  }
  .coreImgBox{
    padding: 0 8px;
    position: relative;
    height: 408px;
    .imgBtn{
      position: absolute;
      width:60px;
      height: 60px;
      top: 50%;
      color: #8B91A1;
      margin-top:-30px;
      background: #fff;  
      border-radius: 50%;
      box-shadow:0px 0px 16px rgba(217,233,255,0.75);
      font-size: 35px;
      line-height: 65px;
      cursor: pointer;
      &:hover{
        box-shadow:0px 0px 16px rgba(184,214,255,1);
      }
      &.pre{
        left: 0;
      }
       &.next{
        right: 0;
      }
    }
    .coreImgView{
      width: 800px;
      overflow: hidden;
      height: 408px;
      margin: 0 auto;
      ul.imgList{
        height: 100%;
        float: left;
        transition: transform 0.3s ease-in-out;
        li{
          display: inline-block;
          height: 100%;
          width: 800px;
          background-position: center center;
          background-size: contain;
        }
      }
    }
  }
}
.common{
  background:linear-gradient( #F8FAFD 0%,#fff 30%);
  .common_wrap{
    padding: 100px 8px 200px 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .common_img{
      display: block;
      width: 615px;
      height: 247px;
      margin-right: 90px;
    }
    .common_content{
      flex: 1;
      text-align: left;
      font-size:16px;
      font-family:SourceHanSansCN-Light;
      color:rgba(125,132,150,1);
      line-height:32px;
      h3{
        font-size:40px;
        font-family:SourceHanSansCN-ExtraLight;
        color:rgba(0,13,76,1);
        line-height:1;
        margin-bottom: 50px;
      }
      p{
        margin-bottom: 0;
      }
    }
  }
}
</style>
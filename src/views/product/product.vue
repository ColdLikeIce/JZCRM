<!--  -->
<template>
  <div>
    <h3-banner :bgUrl="resource.banner"></h3-banner>
    <div class="advantage wraper">
      <h3 class="advantage_title">{{resource.advantage.title}}</h3>
      <ul class="list">
        <li :class="{'advantage_itemgt3':resource.advantage.list.length>3}" class="advantage_item" v-for="(item,index) in  resource.advantage.list" :key="index">
          <img :src="item.img" alt="icon">
          <h4 v-for="(sloganItem,sloganIndex) in item.slogan" :key="sloganIndex+'slogan'">{{sloganItem}}</h4>
          <p v-for="(contentItem,contentIndex) in item.content" :key="contentIndex+'content'">{{contentItem}}</p>
        </li>
      </ul>
    </div>
    <div class="core">
      <div class="w_1200">
        <h3 class="title">{{resource.core.title}}</h3>
        <p class="download" @click="download">更多功能请下载{{resource.core.type}}进行体验
          <a-icon type="right" />
        </p>
        <div class="coreList">
          <ul class="coreList_wrap" v-for="n in row" :key="n">
            <template v-for="(item,index) in resource.core.list">
              <li v-if="n*(resource.core.rowNum)>item.id&&item.id>=(n-1)*(resource.core.rowNum)">
                <div :style="activeStyle(item.id)" class="iconBox" @mouseover="coreHover(item.id)" @mouseout="coreLink()" @click="coreSelect(item.id)">
                  <img class="coreList_icon" :src="item.icon" alt="icon">
                </div>
                <p>{{item.title}}</p>
              </li>
            </template>
          </ul>
        </div>
        <div class="coreShow">
          <h4 class="coreShowTitle">{{coreShow.title}}</h4>
          <p class="introduction">{{coreShow.introduction}}</p>
          <div class="coreImgBox">
            <span v-show="coreImgList.length>1" @click="checkoutImg('pre')" :class="{'disabled':currentId===0}" class="imgBtn pre">
              <a-icon type="left" />
            </span>
            <div class="coreImgView">
              <ul class="imgList" :style="`width:${800*coreImgList.length}px;transform:translateX(${-currentId/coreImgList.length*100}%)`">
                <li class="imgListItem" v-for="(item ,index) in coreImgList" :style="`background-image:url(${item})`"></li>
              </ul>
            </div>
            <span v-show="coreImgList.length>1" @click="checkoutImg('next')" :class="{'disabled':currentId===coreImgList.length-1}" class="imgBtn next">
              <a-icon type="right" />
            </span>
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
import staticData from './static'
import h3Banner from '@/components/common/h3-banner'
export default {
  name: 'h3product',
  data() {
    return {
      resource: staticData.crm,
      common: staticData.common,
      currentId: 0,
      hoverIndex: null
    }
  },

  components: {
    h3Banner
  },

  computed: {
    row() {
      return Math.ceil(
        this.resource.core.list.length / this.resource.core.rowNum
      )
    },
    coreShow() {
      return this.resource.core.list[this.currentId]
    },
    coreImgList() {
      let arr = []
      this.resource.core.list.forEach(item => {
        arr.push(item.imgList)
      })
      return arr
    }
  },

  watch: {
    $route: {
      handler: function(val, oldval) {
        ;(this.currentId = 0),
          (this.hoverIndex = null),
          (this.resource = staticData[val.name])
      },
      immediate: true
    }
  },

  methods: {
    download() {
      this.$router.push({ path: '/download' })
    },
    coreSelect(id) {
      if (id !== this.currentId) {
        this.currentId = id
      }
    },
    coreHover(id) {
      console.log(0)
      this.hoverIndex = id
    },
    coreLink() {
      this.hoverIndex = null
    },
    activeStyle(id) {
      if (id === this.currentId) {
        return {
          background: this.resource.core.list[this.currentId].activeColor
        }
      } else if (id === this.hoverIndex) {
        return {
          background: this.resource.core.list[this.hoverIndex].activeColor
        }
      } else {
        return
      }
    },
    checkoutImg(type) {
      if (type === 'pre') {
        if (this.currentId > 0) {
          this.currentId--
        }
      } else {
        if (this.currentId < this.coreImgList.length - 1) {
          this.currentId++
        }
      }
    }
  }
}
</script>
<style lang='less' scoped>
.advantage {
  padding-top: 117px;
  text-align: center;
  font-family: SourceHanSansCN, 微软雅黑;
  padding-bottom: 90px;
  .advantage_title {
    font-weight: normal;
    font-size: 40px;
    font-family: SourceHanSansCN-ExtraLight;
    color: rgba(0, 13, 76, 1);
    line-height: 1;
    margin-bottom: 90px;
  }
  .list {
    padding: 0 25px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 0;
    .advantage_item {
      flex: 1;
      margin: 0 40px;
      padding: 50px 26px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 2px 3px 18px rgba(217, 233, 255, 0.75);
      cursor: pointer;
      transition: transform 0.3s ease-in-out;
      &:hover {
        transform: scale(1.01, 1.01) translateY(-10px);
      }
      &.advantage_itemgt3 {
        margin: 0 27px;
      }
      img {
        margin-bottom: 52px;
        width: 78px;
        height: 90px;
      }
      h4 {
        margin: 0;
        font-size: 22px;
        font-family: SourceHanSansCN-ExtraLight;
        color: rgba(0, 13, 76, 1);
        line-height: 36px;
      }
      p {
        margin: 0;
        font-size: 14px;
        font-family: SourceHanSansCN-Light;
        color: rgba(125, 132, 150, 1);
        line-height: 30px;
        &:first-of-type {
          margin-top: 24px;
        }
      }
    }
  }
}
.core {
  background: linear-gradient(#f8fafd 0%, #fff 20%);
  padding-top: 90px;
  .title {
    font-weight: normal;
    margin-bottom: 60px;
    font-size: 40px;
    font-family: SourceHanSansCN-ExtraLight;
    color: rgba(0, 13, 76, 1);
    line-height: 1;
  }
  .coreList_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 52px;
    li {
      width: 87px;
      margin: 0 37px;
      font-size: 16px;
      font-family: SourceHanSansCN-Light;
      color: rgba(0, 13, 76, 1);
      line-height: 1;
      .iconBox {
        cursor: pointer;
        display: inline-block;
        width: 87px;
        height: 87px;
        border-radius: 50%;
        background: #dbe0eb;
        margin-bottom: 24px;
        .coreList_icon {
          width: 87px;
          height: 87px;
          display: block;
        }
      }
      > p {
        margin-bottom: 0;
      }
    }
  }
  .download {
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    font-family: SourceHanSansCN-Light;
    color: rgba(55, 116, 248, 1);
    line-height: 1;
    margin-bottom: 82px;
  }
  .coreShow {
    padding: 28px 0 90px 0;
    .coreShowTitle {
      font-size: 40px;
      font-family: SourceHanSansCN-ExtraLight;
      color: rgba(0, 13, 76, 1);
      line-height: 1;
      font-weight: normal;
      margin-bottom: 22px;
    }
    .introduction {
      width: 800px;
      margin: 0 auto;
      font-size: 20px;
      font-family: SourceHanSansCN-ExtraLight;
      color: rgba(125, 132, 150, 1);
      line-height: 40px;
      margin-bottom: 50px;
    }
    .coreImgBox {
      padding: 0 8px;
      position: relative;
      height: 408px;
      .imgBtn {
        position: absolute;
        width: 60px;
        height: 60px;
        top: 50%;
        color: #8b91a1;
        margin-top: -30px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0px 0px 16px rgba(217, 233, 255, 0.75);
        font-size: 35px;
        line-height: 65px;
        cursor: pointer;
        &:hover {
          box-shadow: 0px 0px 16px rgba(184, 214, 255, 1);
        }
        &.pre {
          left: 0;
        }
        &.next {
          right: 0;
        }
        &.disabled {
          color: #f0f0f3;
          &:hover {
            box-shadow: 0px 0px 16px rgba(217, 233, 255, 0.75);
          }
        }
      }
      .coreImgView {
        width: 800px;
        overflow: hidden;
        height: 408px;
        margin: 0 auto;
        ul.imgList {
          height: 100%;
          float: left;
          transform: translateZ(0);
          transition: transform 0.3s ease-in-out;
          li {
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
}
.common {
  background: linear-gradient(#f8fafd 0%, #fff 30%);
  .common_wrap {
    padding: 100px 8px 200px 8px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .common_img {
      display: block;
      width: 615px;
      height: 247px;
      margin-right: 90px;
    }
    .common_content {
      flex: 1;
      text-align: left;
      font-size: 16px;
      font-family: SourceHanSansCN-Light;
      color: rgba(125, 132, 150, 1);
      line-height: 32px;
      h3 {
        font-size: 40px;
        font-family: SourceHanSansCN-ExtraLight;
        color: rgba(0, 13, 76, 1);
        line-height: 1;
        margin-bottom: 50px;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
}
</style>
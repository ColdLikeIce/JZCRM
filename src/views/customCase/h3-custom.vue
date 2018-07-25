<!--  -->
<template>
  <div class="h_1000">
    <p class="title">{{title}}</p>
    <div class="toppart">
      <div class="top_part">
        <img class="pic" :src="imgurl" alt="">
        <div class="comintro">
          <div v-for="(children,index) in introduce" :key="index">
            <div class="t_51">
              <span class="mark"></span>
              <span class="content">{{children.fun1}}</span>
            </div>
            <div :class=" index===0? 'introtype':'w_682'">
              {{children.fun2}}
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_part">
        <div class="left_part">
          <div>
            <span class="mark"></span>
            <span class="content">业务痛点</span>
          </div>
          <ul class="tddetail">
            <li v-for="(painitem,index) in painspot" :key="index">
              <span>{{painitem.content}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h3-custom',
  data() {
    return {
      title: '加枫卫浴(中山)有限公司',
      imgurl: require('../../assets/img/CustomCase/jfwy.png'),
      introduce: [
        {
          fun1: '行业',
          fun2: '家装'
        },
        {
          fun1: '企业介绍',
          fun2:
            '加枫卫浴(中山)有限公司，自1995年成立以来，已经成为一家集自主研发、生产与销售为一体驰名国内外的淋浴房生产企业。销售网点遍及国内30余省，其生产规模和销售数量居国内'
        }
      ],
      painspot: [
        {
          content: '从接单、施工到交付验收的整个过程，大都是传统的手工记录方式'
        },
        {
          content: '售后过程不规范、无记录，容易导致客户纠纷和内部漏洞'
        },
        {
          content: '客户资料管理难度大，容易丢失'
        },
        {
          content: '缺乏信息数据流转的支持，各地销售数据不互通，经营效率略低下'
        }
      ]
    }
  },

  components: {},

  computed: {},

  created() {},

  mounted() {},

  methods: {}
}
</script>
<style lang='less' scoped>
.h_1000 {
  height: 1000px;
  .title {
    line-height: 1;
    margin-bottom: 3px;
    font-size: 28px;
  }
  .toppart {
    height: 1000px;
  }
}
.t_51 {
  margin-bottom: 11px;
}
.mark {
  font-size: 20px;
  border-left: 3px solid #3774f8;
}
.content {
  font-size: 20px;
  margin-left: 11px;
  color: rgba(0, 13, 76, 1);
  line-height: 1;
}
.w_682 {
  width: 682px;
  font-size: 16px;
  line-height: 30px;
  // & :last-of-type{
  //   margin-bottom: 0;
  // }
}
.introtype {
  font-size: 16px;
  line-height: 1;
  margin-bottom: 21px;
}
.pic {
  margin-left: 149px;
}
.comintro {
  margin-top: 48px;
  text-align: left;
  margin-left: 85px;
}
.top_part {
  display: flex;
}
.bottom_part {
  display: flex;
  margin-top: 60px;
}
.left_part {
  margin-left: 149px;
  text-align: left;
}
.tddetail {
  li {
    margin-bottom: 14px;
    &:last-of-type {
      margin-bottom: 0;
    }
    // font-size: 16px;
    // line-height: 14px;
  }
}
</style>
<!--  -->
<template>
  <div class="header wraper">
    <div>
      <img src="../../assets/img/logo.png" alt="logo">
      <img src="../../assets/img/ding.png" alt="dingding">
    </div>
    <div class="menu">
    <a-menu class="menuList" v-model="current" mode="horizontal" >
      <template v-for ="(item,index) in menu">
        <a-menu-item v-if ="!item.children" :key="item.path" @click.native="openLink(item.path)">{{item.name}}</a-menu-item>
        <a-sub-menu v-else :key="item.path">
        <span slot="title">{{item.name}}</span>
          <a-menu-item v-for ="(itm,index)  in item.children" :key="itm.path" @click.native="openLink(itm.path)">{{itm.name}}</a-menu-item>
        </a-sub-menu>
      </template>
  </a-menu>
    </div>
    <div class="btnGround">
      <a-button >登录</a-button>
      <a-button type="primary">注册</a-button>
    </div>
  </div>
</template>

<script>

export default {
  name:'h3-header',
  data() {
    return {
      current:[this.$route.path],
      menu:[
        {
          name:'首页',
          path:'/index',
        },
        {
          name:'产品',
          path:'/product',
          children:[
            {
              name:'决招CRM',
              path:'/product/jzcrm',
            },
            {
              name:'决招HRM',
              path:'/product/jzhrm',
            },
            {
              name:'决招进销存',
              path:'/product/jzjxc',
            },
          ]
        },
        {
          name:'下载中心',
          path:'/download'
        },
        {
          name:'客户案例',
          path:'/customerCase'
        },
        {
          name:'服务',
          path:'/server',
          children:[
            {
              name:'服务内容',
              path:'/server/content',
            },
            {
              name:'产品报价',
              path:'/server/price',
            },
          ]
        },
        {
          name:'帮助中心',
          path:'/help'
        },
        {
          name:'关于我们',
          path:'/about',
          children:[
            {
              name:'企业简介',
              path:'/about/introduction',
            },
            {
              name:'新闻中心',
              path:'/about/news',
            },
          ]
        },
      ]
    };
  },

  methods: {
    openLink(route){
      this.$router.push({path:route})
    }
  },
}

</script>
<style lang='less' scoped>
@import '../../theme/h3-theme.less';
.header{
  height: 66px;
  display: flex;
  align-items: center;
  color:@fontColor;
}
.ant-menu-horizontal{
  border:none
}
.ant-menu-horizontal > .ant-menu-item:hover, .ant-menu-horizontal > .ant-menu-submenu:hover,.ant-menu-horizontal > .ant-menu-item,.ant-menu-horizontal > .ant-menu-submenu{
  border:none;
}
.ant-menu-horizontal > .ant-menu-item:hover,.ant-menu-horizontal > .ant-menu-submenu:hover{
 color:@primary-color;
}
.ant-menu-horizontal > .ant-menu-item.ant-menu-item-selected,.ant-menu-horizontal > .ant-menu-submenu.ant-menu-submenu-selected{
  border-bottom: 2px solid @primary-color;
  color: @primary-color;
}
.menu{
  flex: 1;
  text-align: right;
  .menuList{
    display: inline-block
  }
}
.btnGround{
  position: relative;
  top: -3px;
  .ant-btn{
    &:first-of-type{
      margin-right: 22px;
    }
    &:hover{
    color: @primary-color;
    border-color: @primary-color;
  }
  }
  .ant-btn-primary{
    background-color: @primary-color;
    border-color: @primary-color;
    &:hover{
      color:#fff;
    }
  }
}
</style>
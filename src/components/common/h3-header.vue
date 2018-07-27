<template>
  <div class="header wraper">
    <div>
      <img class="jzlogo" src="../../assets/img/logo.png" alt="logo">
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
      <a-button class="login" type="primary" @click.native="login" ghost>登录</a-button>
      <a-button type="primary" @click.native="regist">注册</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'h3-header',
  data() {
    return {
      current: [this.$route.path],
      menu: [
        {
          name: '首页',
          path: '/index'
        },
        {
          name: '产品',
          path: '/product',
          children: [
            {
              name: '决招CRM',
              path: '/product/jzcrm'
            },
            {
              name: '决招HRM',
              path: '/product/jzhrm'
            },
            {
              name: '决招进销存',
              path: '/product/jzjxc'
            }
          ]
        },
        {
          name:'客户案例',
          path:'/customerCase'
        },
         {
          name:'下载中心',
          path:'/download'
        },
        {
          name: '服务',
          path: '/server',
          children: [
            {
              name: '服务内容',
              path: '/server/content'
            },
            {
              name: '产品报价',
              path: '/server/price'
            }
          ]
        },
        {
          name: '帮助中心',
          path: '/hlep'
        },
        {
          name: '关于我们',
          path: '/about/introduction',
          // children: [
          //   {
          //     name: '企业简介',
          //     path: '/about/introduction'
          //   },
          //   {
          //     name: '新闻中心',
          //     path: '/about/news'
          //   }
          // ]
        }
      ]
    }
  },
  watch: {
    $route: {
      handler: function(val, oldval) {
        this.current = [val.path]
      },
      immediate: true
    }
  },
  methods: {
    openLink(route){
      if(route==='/hlep'){
       window.open('http://juezhao.h3yun.com/manage/index.php','_blank')
      }else{
        this.$router.push({path:route})
      }
      
    },
    regist(){
      window.open('https://oa.dingtalk.com/register.html?spm=a3140.8736650.2231602.11.75185c8cf87kFc&source=2202&lwfrom=2017120202092064209309201','_blank')
    },
    login(){
      this.$router.push({path:'/login'})
    }
  },
}
</script>
<style lang='less' scoped>
@import '../../theme/h3-theme.less';
.header {
  height: 66px;
  display: flex;
  align-items: center;
  color: @fontColor;
  .jzlogo{
    margin-right: 18px;
  }
}
.ant-menu-horizontal {
  border: none;
  .ant-menu{
    font-size: 16px;
    font-family:SourceHanSansCN-Light;
  }
}
.ant-menu-horizontal  .ant-menu-item,.ant-menu-horizontal  .ant-menu-submenu{
  padding: 0 5px;
  margin: 0 17px;
}
.ant-menu-horizontal /deep/ .ant-menu-submenu .ant-menu-submenu-title{
  padding: 0;
}
.ant-menu-sub .ant-menu-item{
 padding-left:15px 
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover,
.ant-menu-horizontal > .ant-menu-item,
.ant-menu-horizontal > .ant-menu-submenu {
  border: none;
}
.ant-menu-horizontal > .ant-menu-item:hover,
.ant-menu-horizontal > .ant-menu-submenu:hover {
  color: @primary-color;
}
.ant-menu-horizontal > .ant-menu-item.ant-menu-item-selected,
.ant-menu-horizontal > .ant-menu-submenu.ant-menu-submenu-selected {
  border-bottom: 3px solid @primary-color;
  color: @primary-color;
}
.menu {
  flex: 1;
  text-align: right;
  .menuList {
    display: inline-block;
  }
}
.btnGround {
  margin-left: 40px;
  position: relative;
  top: -3px;
  .ant-btn {
    &:first-of-type {
      margin-right: 22px;
    }
  }
  .ant-btn-primary {
    background-color: @primary-color;
    border-color: @primary-color;
  }
   .login{
      color:@primary-color;
    }
   .ant-btn{
    width:94px; 
  }
}
</style>
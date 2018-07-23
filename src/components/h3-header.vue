<template>
  <div class="wrapper">
    <div style="width:400px;float:left">
      <img class="header-logo" slot="header-logo" src="../assets/img/logo.png" alt="logo">
      <img class="ding-logo" slot="header-logo" src="../assets/img/ding.png" alt="logo">
    </div>
    <div style="width:550px;float:left" class="menu">
      <div v-for="(item,index) in memulist" :key="index" @click="selectMenu(item.index)">
        <div class="menu_item" :class="index==selectIndex-1? 'blue-item':'item'">
          <span>{{item.name}}</span>
          <a-menu class="dropdownWrapper" >
            <a-menu-item v-for='(subitem, ids) in item.submenu' :key="ids">{{subitem.name}}</a-menu-item>
          </a-menu>
        </div>
      </div>
    </div>
    <div style="width:250px;float:left ">
      <a-button class="login ">登录</a-button>
      <a-button class="register ">注册</a-button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  data() {
    return {
      memulist: [
        {
          index: 1,
          name: '首页'
        },
        {
          index: 2,
          name: '产品',
          submenu: [
            {
              subindex: 1,
              name: '决招HRM'
            },
            {
              subindex: 2,
              name: '决招CRM'
            },
            {
              subindex: 3,
              name: '决招进销存'
            }
          ]
        },
        {
          index: 3,
          name: '客户案例'
        },
        {
          index: 4,
          name: '下载中心'
        },
        {
          index: 5,
          name: '服务',
          submenu: [
            {
              subindex: 1,
              name: '服务内容'
            },
            {
              subindex: 2,
              name: '产品报价'
            }
          ]
        },
        {
          index: 6,
          name: '帮助中心'
        },
        {
          index: 7,
          name: '关于我们',
          submenu: [
            {
              subindex: 1,
              name: '企业简介'
            },
            {
              subindex: 2,
              name: '新闻中心'
            }
          ]
        }
      ],
      selectIndex: 1
    }
  },
  methods: {
    selectMenu(index) {
      debugger
      this.selectIndex = index
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header-logo {
  width: 188px;
  height: 32px;
}
.ding-logo {
  width: 133px;
  height: 20px;
  margin-left: 20px;
}
.blue-item {
  float: left;
  width: 70px;
  color: #388bff;
}
.item {
  float: left;
  width: 70px;
}
.login {
  width: 94px;
  margin-left: 10px;
  color: #388bff;
  border-style: solid;
  border-width: 1px;
  border-color: #388bff;
}
.register {
  width: 94px;
  margin-left: 40px;
  color: #fff;
  background-color: #388bff;
  border-style: solid;
  border-width: 1px;
  border-color: #388bff;
}
.dropdownWrapper {
  /*margin-top: 36px;*/
  // border: 1px solid #2c3e50;
  position: absolute;
  display: none;
  font-size: 14px;
}
.dropdownWrapper li {
  display: block;
}
.ant-menu {
  float: left;
}
.menu_item{
  cursor: pointer;
  position: relative;
  &:hover .dropdownWrapper{
   display: block 
  }
}
// .wrapper{
//   width: 1200;
// }
</style>

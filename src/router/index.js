import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
import Download from '@/views/download/download'
import Servicecontent from '@/views/server/serviceContent'
import Introduction from '@/views/about/introduction'
import CustomCase from '@/views/customCase/customCase'
import Product from '@/views/product/product'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'web',
      redirect: '/index',
      component: Web,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'download',
          name: 'download',
          component: Download,
          meta: {
            title: '下载中心'
          }
        },
        {
          path: '/server/content',
          name: 'servicecontent',
          component: Servicecontent,
          meta: {
            title: '服务内容'
          }
        },
        {
          path: 'introduction',
          name: 'introduction',
          component: Introduction,
          meta: {
            title: '公司简介'
          }
        },
        {
          path: 'customerCase',
          name: 'customerCase',
          component: CustomCase,
          meta: {
            title: '客户案例'
          }
        },{
            path: '/product/jzcrm',
            name: 'crm',
            component: Product,
            meta: {
              title: '决招CRM'
            }
          },
        {
          path: '/product/jzhrm',
          name: 'hrm',
          component: Product,
          meta: {
            title: '决招HRM'
          }
        },
        {
          path: '/product/jzjxc',
          name: 'jxc',
          component: Product,
          meta: {
            title: '决招进销存'
          }
        },
        {
          path: '/about/introduction',
          name: 'introduction',
          component: Introduction,
          meta: {
            title: '企业简介'
          }
        },
        {
          path: '/about/news',
          name: 'news',
          component: Product,
          meta: {
            title: '新闻中心'
          }
        }
      ]
    }
  ]
})


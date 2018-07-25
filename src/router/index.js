import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
import Download from '@/views/dowmload'
import Servicecontent from '@/views/servicecontent'
import Introduction from '@/views/introduction'
import CustomCase from '@/views/customcase'
import Product from '@/views/product/product'
Vue.use(Router)

export default new Router({
  mode: 'history',
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
          path: 'dowmload',
          name: 'Dowmload',
          component: Download,
          meta: {
            title: '下载中心'
          }
        },
        {
          path: 'servicecontent',
          name: 'Servicecontent',
          component: Servicecontent,
          meta: {
            title: '服务内容'
          }
        },
        {
          path: 'introduction',
          name: 'Introduction',
          component: Introduction,
          meta: {
            title: '公司简介'
          }
        },
        {
          path: 'customcase',
          name: 'CustomCase',
          component: CustomCase,
          meta: {
            title: '客户案例',
            path: '/product/jzcrm',
            name: 'crm',
            component: Product,
            meta: {
              title: '决招CRM'
            }
          },
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
        }
      ]
    }
  ]
})


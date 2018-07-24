import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
import Product from '@/views/product/product'
Vue.use(Router)

export default  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'web',
      redirect:'/index',
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
        }
      ]
    }
  ]
})


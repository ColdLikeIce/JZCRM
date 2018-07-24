import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
import Download from '@/views/dowmload'
import Service from '@/views/servicemanage'
import AboutUs from '@/views/aboutus'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Web',
      redirect: '/aboutus',
      component: Web,
      children: [
        {
          path: 'index',
          name: 'Index',
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
          path: 'service',
          name: 'Service',
          component: Service,
          meta: {
            title: '下载中心'
          }
        },
        {
          path: 'aboutus',
          name: 'AboutUs',
          component: AboutUs,
          meta: {
            title: '关于我们'
          }
        }
      ]
    }
  ]
})


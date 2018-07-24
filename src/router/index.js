import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
import Download from '@/views/dowmload'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Web',
      redirect: '/index',
      component: Web,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: Index,
          meta: {
            title: '首页'
          }
        }
      ]
    }
  ]
})


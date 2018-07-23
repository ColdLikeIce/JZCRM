import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Web from '@/views/web'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
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

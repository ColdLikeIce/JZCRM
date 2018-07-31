// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import 'vue-antd-ui/dist/antd.css';
import Antd from 'vue-antd-ui'; 

Vue.config.productionTip = false
Vue.use(Antd)
/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

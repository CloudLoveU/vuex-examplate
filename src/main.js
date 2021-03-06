// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import '@/assets/css/select.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 注入实例中后就可以进行整个应用的状态管理
  template: '<App/>',
  components: { App }
})

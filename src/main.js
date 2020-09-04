// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
Vue.prototype.$axios = axios

axios.defaults.timeout = 600000 // 请求超时1分钟
// axios设置头部token
axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem('Token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  }
)
axios.defaults.retry = 4 // 重试次数
axios.defaults.retryDelay = 1000// 重试延时

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

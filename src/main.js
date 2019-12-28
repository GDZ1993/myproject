// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index.js'
import store from './store/store'
import 'view-design/dist/styles/iview.css'
import 'swiper/css/swiper.css'
import viewDesign from 'view-design'
import util from './util/util'
import axios from 'axios'
import moment from 'moment'
import Cookies from 'js-cookie'
import echarts from 'echarts'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
Vue.component('swiper', swiper)
Vue.component('swiperSlide', swiperSlide)
Vue.prototype.$echarts = echarts
Vue.prototype.$time = moment
Vue.prototype.$util = util
Vue.prototype.$ajax = util.ajax
Vue.prototype.$axios = axios
Vue.prototype.$cookies = Cookies
// Vue.component(key, iview[key]) 定义全局组件函数
Vue.use(viewDesign)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

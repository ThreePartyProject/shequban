// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import '@/utils/request'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import Pagination from 'vue-pagination-2'
import App from './App'
import router from './router'
Vue.component('pagination', Pagination)
import VideoPlayer from 'vue-video-player'
// 引入样式
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import 'videojs-contrib-hls'
//使用组件
Vue.use(VideoPlayer)
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/theme/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.use(ElementUI, { locale })

// import { Message } from 'element-ui'
// Vue.prototype.$message = Message

Vue.use(VueBlu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

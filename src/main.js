import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入iconfont
import './static/iconfont/iconfont.css'
//引入swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
//引入视频播放组件
import 'video.js/dist/video-js.css'

Vue.config.productionTip = false
//注册组件
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
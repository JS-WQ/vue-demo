// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.scss'
import App from './App'
import '//at.alicdn.com/t/font_658385_yzjz6yf65bx4j9k9.js'


Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
  },
  components: { App },
  template: '<app/>',
})



import Vue from 'vue'
import App from './App.vue'
import common from '../lib/index'
import request from '@/utils/request'
import vueEleProject from 'vue-ele-project'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)

const localDebugging = false // 本地调试 远程调试组件可以设置为false
Vue.use(localDebugging ? common : vueEleProject)
// mock请求
if (process.env.NODE_ENV === 'development') {
  require('@/mock')
}
Vue.prototype.$request = request
new Vue({
  render: (h) => h(App),
}).$mount('#app')

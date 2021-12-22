import Vue from 'vue'
import App from './App.vue'
import common from '../lib/index'
import vueEleProject from 'vue-ele-project'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.use(vueEleProject);
const localDebugging = true // 本地调试 远程调试组件可以设置为false
if (localDebugging) {
  Vue.use(common)
} else {
  Vue.use(vueEleProject)
}
Vue.use(common)
new Vue({
  render: (h) => h(App),
}).$mount('#app')

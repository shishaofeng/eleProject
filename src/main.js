import Vue from "vue";
import App from "./App.vue";
// import buttonList from "../lib/index";
import vueEleProject from "vue-ele-project";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(vueEleProject);
// Vue.use(buttonList);
new Vue({
  render: (h) => h(App),
}).$mount("#app");

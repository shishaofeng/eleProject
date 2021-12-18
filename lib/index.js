import buttonList from "./component/buttonList.vue";
buttonList.install = (Vue) => {
  Vue.component(buttonList.name, buttonList);
};
export default buttonList;

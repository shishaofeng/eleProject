import buttonList from './component/buttonList.vue'
import table from './component/table.vue'
import form from './component/form.vue'

const common = {
  install: (Vue) => {
    Vue.component(buttonList.name, buttonList)
    Vue.component(table.name, table)
    Vue.component(form.name, form)
  },
}

export default common

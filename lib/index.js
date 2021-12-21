import buttonList from './component/buttonList.vue'
import table from './component/table.vue'

const common = {
  install: (Vue) => {
    Vue.component(buttonList.name, buttonList)
    Vue.component(table.name, table)
  },
}

export default common

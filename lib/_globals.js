/**
 * 借助webpack使用require.context()方法创建自己的(模块)上下文，从而实现自动动态require组件。
 * 该方法需要三个参数：要搜索的文件夹目录、是否还搜索他的子目录，一个匹配文件的正则表达式
 * 在main.js里引入当前文件
 */
import Vue from 'vue'

const requireComponent = require.context('../component', false, /\.vue$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = fileName
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
    .split('-')
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('')

  Vue.component(componentName, componentConfig.default || componentConfig)
})

const indexComponent = require.context('../component', true, /index\.js/)

indexComponent.keys().forEach((fileName) => {
  const componentConfig = indexComponent(fileName)
  Vue.component(componentConfig.default.name, componentConfig.default)
})

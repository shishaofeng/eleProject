# project

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn dev
```

### Compiles and minifies for production

```
yarn build
```

### 发布 npm 库之前需要先执行

```
yarn lib

### Lints and fixes files
```

yarn lint

```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
```
### buttonList 使用教程
![avatar](src/assets/button.jpeg)
```
main.js 引入 
    import vueEleProject from "vue-ele-project";
    Vue.use(vueEleProject);

    <buttonList :buttonList="buttonList" size="medium"></buttonList>
    data() {
    return {
      buttonList: [
        {
          name: '默认按钮',
          color: 'red',//自定义颜色
          type: '',//指出所有饿了么的按钮属性
          click: ({ item, index }) => { // 按钮点击事件
            console.log(item, index)
          },
        },
        {
          name: '主要按钮',
          type: 'primary',
          disabled: true,
          icon: 'el-icon-arrow-left',
          click: ({ item, index }) => {
            console.log(item, index)
          },
        },
        {
          name: '成功按钮',
          type: 'success',
          click: ({ item, index }) => {
            console.log(item, index)
          },
        },
        {
          name: '信息按钮',
          type: 'info',
          click: ({ item, index }) => {
            console.log(item, index)
          },
        },
        {
          name: '信息按钮',
          type: 'warning',
          click: ({ item, index }) => {
            console.log(item, index)
          },
        },
        {
          name: '危险按钮',
          type: 'danger',
          click: ({ item, index }) => {
            console.log(item, index)
          },
        },
      ],
    }
  },
```
# vue-ele-project

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

### vue-ele-project 使用教程 

```
main.js 引入
    import vueEleProject from "vue-ele-project";
    Vue.use(vueEleProject);
```

### buttonList 使用教程

![avatar](src/assets/button.jpeg)

```
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

### Table 使用教程

![avatar](src/assets/table.png)

```
     <Table
          class="custom-table"
          :data="tableData"
          :columns="columns"
          size="mini"
          showIndex
          showSelection
          :header-cell-style="
            () => {
              return {
                background: 'rgb(238, 239, 243)',
                'text-align': 'center',
                'font-size': '14px',
                color: 'rgb(80, 80, 80)',
              }
            }
          "
          :cell-style="
            () => {
              return {
                padding: '2px',
                'text-align': 'center',
              }
            }
          "
        >
          <template v-slot:action="{ row, $index }">
            <el-form-item>
              <el-link
                type="primary"
                :underline="false"
                @click="editRow(row, $index)"
                >修改</el-link
              >
              &nbsp;&nbsp;
              <el-link
                type="primary"
                :underline="false"
                @click="deleteRow(row, $index)"
                >删除</el-link
              >
            </el-form-item>
          </template>
          <template v-slot:number="{ row }">
            <el-form-item>
              <el-input v-model="row.number"></el-input>
            </el-form-item>
          </template>
          <template v-slot:select="{ row }">
            <el-form-item>
              <el-select v-model="row.select" placeholder="请选择">
                <el-option
                  v-for="item in selectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </template>
          <template v-slot:cascader="{ row }">
            <el-form-item>
              <el-cascader
                v-model="row.cascader"
                :options="cascaderOptions"
                @change="handleChange"
              ></el-cascader>
            </el-form-item>
          </template>
        </Table>


      data() {
        return {
          columns: [
            { defaultSlot: 'action', label: '操作' },
            { prop: 'date', label: '日期', width: 200 },
            { prop: 'name', label: '姓名', width: 180 },
            { prop: 'address', label: '地址' },
            { defaultSlot: 'number', label: '输入框' },
            { defaultSlot: 'select', label: '下拉框' },
            { defaultSlot: 'cascader', label: '级联选择框' },
          ],
          tableData: [
            {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
            },
            {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
            },
            {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
            },
          ],
        }
      },
```

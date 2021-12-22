<template>
  <div id="app">
    <el-form size="small" :model="form">
      <img alt="Vue logo" src="./assets/logo.png" />
      <ButtonList :buttonList="buttonList" size="medium"></ButtonList>
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
        </template> </Table
    ></el-form>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      form: {},
      cascaderOptions: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
      ],
      selectOptions: [
        { label: '111', value: '111' },
        { label: '222', value: '222' },
      ],
      buttonList: [
        {
          name: '默认按钮',
          color: 'red',
          type: '',
          click: ({ item, index }) => {
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
  methods: {
    editRow(row, index) {
      console.log(row, index)
    },
    deleteRow(row, index) {
      console.log(row, index)
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-table {
  margin: 20px 0;
}
td .el-form-item--mini.el-form-item,
td .el-form-item--small.el-form-item {
  margin: 3px 5px;
}
</style>

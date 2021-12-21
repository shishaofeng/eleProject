<template>
  <div id="app">
    <el-form>
      <img alt="Vue logo" src="./assets/logo.png" />
      <ButtonList :buttonList="buttonList" size="medium"></ButtonList>
      <Table :data="tableData" :columns="columns" size="mini">
        <template v-slot:number="{ row }">
          <el-form-item>
            <el-input v-model="row.number" size="small"></el-input>
          </el-form-item> </template
        ><template v-slot:month="{ row }">
          <el-form-item>
            <el-date-picker
              v-model="row.month"
              type="month"
              placeholder="选择月"
            >
            </el-date-picker>
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
        { prop: 'date', label: '日期', width: 200 },
        { prop: 'name', label: '姓名', width: 180 },
        { prop: 'address', label: '地址' },
        { defaultSlot: 'number', label: '数字' },
        { defaultSlot: 'month', label: '月份' },
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
</style>

<template>
  <div>
    <el-row>
      <el-button
        v-for="(item, index) in buttonList"
        :key="index"
        v-bind="item"
        :size="size"
        :style="{ color: item.color, border: `1px solid ${item.color}` }"
        @click="item.click && item.click({item,index})"
        >{{ item.name }}
      </el-button>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'buttonList',
  props: {
    size: String,
    buttonList: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
<style scoped></style>

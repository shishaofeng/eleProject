<template>
  <div class="table">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      :data="data"
      fit
      style="width: 100%"
    >
      <el-table-column v-if="showIndex" type="index" label="序号" width="50">
      </el-table-column>
      <el-table-column v-if="showSelection" type="selection" width="55">
      </el-table-column>

      <slot></slot>
      <template slot="empty"> 暂无数据！ </template>
      <el-table-column
        v-for="(item, index) in columns"
        :key="item.prop || index"
        :prop="item.prop"
        :label="item.label"
        v-bind="item"
        :show-overflow-tooltip="true"
      >
        <template v-if="item.defaultSlot" v-slot:default="slotProps">
          <slot :name="item.defaultSlot" v-bind="slotProps"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    columns: {
      type: Array,
      default: () => {
        return []
      },
    },
    showIndex: {
      type: Boolean,
      default: false,
    },
    showSelection: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>

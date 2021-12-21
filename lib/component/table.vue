<template>
  <div class="table">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      :data="data"
      fit
      style="width: 100%"
    >
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
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style></style>

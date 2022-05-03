<template>
  <div class="form">
    <el-form v-bind="$attrs" v-on="$listeners">
      <el-row v-if="formList && formList.length" :gutter="0">
        <el-col
          v-for="(item, index) in formList"
          :key="index"
          :span="24 / columns"
        >
          <el-form-item
            :key="item.prop"
            v-bind="item"
            :style="{ width: item.width || '25' }"
          >
            <template #label>
              <span
                v-if="item.label && item.label.length <= 6"
                class="ele-tooltip-input__label"
              >{{ item.label }}</span>
              <el-tooltip v-else :content="item.label" placement="top">
                <span class="ele-tooltip-input__label">{{
                  item.label.slice(0, 6) + '..'
                }}</span>
              </el-tooltip>
            </template>
            <template v-if="item.searchType === 'input'">
              <el-input
                v-model="formData[item.prop]"
                v-bind="item"
                v-on="{ ...item.listeners }"
              />
            </template>
            <template v-if="item.searchType === 'select'">
              <el-select
                v-model="formData[item.prop]"
                :placeholder="'请选择' + item.label"
                clearable
                v-bind="item"
                v-on="{ ...item.listeners }"
              >
                <el-option
                  v-for="(opt, index) in item.options"
                  :key="opt[item.valueKey] || index"
                  :label="opt[item.labelKey] || 'label'"
                  :value="opt[item.valueKey] || 'value'"
                />
              </el-select>
            </template>
            <template v-if="item.searchType === 'datePicker'">
              <el-date-picker
                v-model="formData[item.prop]"
                placeholder="请选择"
                v-bind="item"
                :type="item.pickerType"
                v-on="{ ...item.listeners }"
              />
            </template><template v-if="item.type === 'switch'">
              <el-switch
                v-model="formData[item.prop]"
                v-bind="item"
                v-on="{ ...item.listeners }"
              />
            </template>
            <!-- 自定义列 -->
            <template v-if="item.defaultSlot" #default="item">
              <slot :name="item.defaultSlot" v-bind="item"></slot>
            </template>
          </el-form-item>
        </el-col>
      </el-row>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'FormList',
  props: {
    formList: {
      type: Array,
      default: () => {
        return []
      },
    },
    form: {
      type: Object,
      default: () => {
        return {}
      },
    },
    columns: {
      type: Number,
      default: () => {
        return 4
      },
    },
  },
  data() {
    return {
      formData: JSON.parse(JSON.stringify(this.form)),
    }
  },
  computed: {},
  watch: {
    formData: {
      handler(val) {
        this.$emit('update:form', val)
      },
      deep: true,
      immediate: true,
    },
  },
}
</script>

<style>
.ele-tooltip-input__label {
  width: 100%;
}
</style>

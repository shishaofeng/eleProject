<template>
  <div class="form">
    <el-form v-bind="$attrs" v-on="$listeners">
      <el-row :gutter="0" v-if="formList && formList.length">
        <el-col
          :span="24 / columns"
          v-for="(item, index) in formList"
          :key="index"
        >
          <el-form-item :key="item.prop" v-bind="item">
            <template v-slot:label>
              <span
                class="ele-tooltip-input__label"
                v-if="item.label && item.label.length <= 6"
                >{{ item.label }}</span
              >
              <el-tooltip v-else :content="item.label" placement="top">
                <span class="ele-tooltip-input__label">{{
                  item.label.slice(0, 6) + '..'
                }}</span>
              </el-tooltip>
            </template>
            <template v-if="item.type === 'input'">
              <el-input v-model="formData[item.prop]"></el-input>
            </template>
            <template v-if="item.type === 'select'">
              <el-select
                v-model="formData[item.prop]"
                :placeholder="'请选择' + item.label"
                clearable
              >
                <el-option
                  v-for="(opt, index) in item.selectObject.options"
                  :key="opt[item.selectObject.valueKey] || index"
                  :label="opt[item.selectObject.labelKey] || 'label'"
                  :value="opt[item.selectObject.valueKey] || 'value'"
                ></el-option>
              </el-select>
            </template>
            <template v-if="item.type === 'date'">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formData[item.prop]"
                style="width: 100%"
              ></el-date-picker> </template
            ><template v-if="item.type === 'switch'">
              <el-switch v-model="formData[item.prop]"></el-switch>
            </template>

            <template v-if="item.defaultSlot" v-solt:default="item">
              <slot :name="item.defaultSlot" v-bind="item"></slot>
            </template> </el-form-item
        ></el-col>
      </el-row>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
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

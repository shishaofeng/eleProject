<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => {
        return {}
      },
    },
    rules: {
      type: Object,
      default: () => {
        return {}
      },
    },
    formList: {
      type: Array,
      default: () => {
        return []
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultSlot: {
      type: Function,
      default: () => {
        return {}
      },
    },
  },
  data() {
    return {
      selectOptions: [],
      defaultAttrs: {
        inline: true,
        size: 'small',
        labelWidth: '120px',
      },
    }
  },
  mounted() {},
  render(h) {
    let { form, rules, formList, defaultAttrs, selectOptions, disabled } = this
    return (
      <div class="form">
        <el-form
          ref="form"
          class="detail-form-inline el-form--label-left"
          {...{ attrs: { ...defaultAttrs } }}
          props={{
            model: form,
            disabled: disabled,
            rules: rules,
          }}
        >
          {formList?.map((item) => {
            if (typeof item.options === 'function') {
              item.options = item.options()
            } else {
              item.options = item.options || []
            }
            if (typeof item.disabled === 'function') {
              item.disabled = item.disabled()
            }

            if (typeof item.hide === 'function') {
              if (item.hide(item)) {
                return
              }
            }
            const inputItem = (
              <el-form-item
                {...{ attrs: { ...item } }}
                class={item.className || 'el-col-6'}
              >
                <el-input
                  {...{ attrs: { ...item } }}
                  v-model={form[item.prop]}
                  clearable
                  {...{
                    on: {
                      ...item.listeners,
                    },
                  }}
                ></el-input>
              </el-form-item>
            )
            selectOptions = item.options
            const optionItem = selectOptions.map((opt) => {
              return (
                <el-option
                  {...{
                    attrs: {
                      label: opt[item.labelKey || 'label'],
                      value: opt[item.valueKey || 'value'],
                      key: opt[item.valueKey || 'value'],
                    },
                  }}
                ></el-option>
              )
            })

            const selectItem = (
              <el-form-item
                {...{ attrs: { ...item } }}
                class={item.className || 'el-col-6'}
              >
                <el-select
                  {...{ attrs: { ...item } }}
                  v-model={form[item.prop]}
                  placeholder={`请选择` + item.label}
                  clearable
                  {...{
                    on: {
                      ...item.listeners,
                    },
                  }}
                >
                  {optionItem}
                </el-select>
              </el-form-item>
            )
            this.$scopedSlots = {
              default: (props) => {
                if (props.render) {
                  return props.render(item)
                }
              },
            }
            const defaultSlotItem =
              item.formType === 'slot' && this.$scopedSlots.default(item)
            switch (item.formType) {
              case 'input':
                return inputItem
              case 'select':
                return selectItem
              case 'slot':
                return defaultSlotItem
              default:
                return inputItem
            }
          })}
        </el-form>
        <slot></slot>
      </div>
    )
  },
  methods: {},
}
</script>
<style>
.el-select-dropdown {
  width: 200px;
}
</style>

<style lang="scss" scoped>
.form {
  margin: 30px 0px 0px;
}
::v-deep .el-form-item--small.el-form-item.el-col-6,
::v-deep .el-form-item--small.el-form-item.el-col-6 {
  width: 25%;
  margin-right: 0;
}
::v-deep .el-form-item--small.el-form-item.el-col-12,
::v-deep .el-form-item--small.el-form-item.el-col-12 {
  width: 50%;
  margin-right: 0;
}
::v-deep .el-input--small .el-input__inner {
  width: 100%;
}
::v-deep .el-form-item__label {
  font-size: 12px;
  color: #888;
  font-family: 'PingFang-SC-Medium,PingFang-SC';
  white-space: nowrap;
}

::v-deep .el-form-item--small.el-form-item .el-form-item__content,
.app-main
  .detail-form
  .el-form-item--small.el-form-item
  .el-form-item__content {
  width: calc(100% - 120px) !important;
}
</style>

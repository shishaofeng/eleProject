<template>
  <div ref="tableWarp" class="table">
    <el-table
      ref="table"
      size="mini"
      style="height: 100%"
      :data="data"
      v-bind="tableProps"
      v-on="$listeners"
    >
      <el-table-column
        v-if="showSelectionCol"
        type="selection"
        align="center"
        width="55"
      ></el-table-column>

      <el-table-column
        v-if="showIndexCol"
        type="index"
        align="center"
        width="56"
        label="序号"
      ></el-table-column>

      <slot></slot>

      <template v-if="empty" v-slot:empty> </template>

      <el-table-column
        v-for="(item, index) in customColumns"
        :key="item.key || index"
        v-bind="item"
      >
        <template v-if="item.headerSlot" v-slot:header="slotProps">
          <slot :name="item.headerSlot" v-bind="slotProps"></slot>
        </template>
        <template v-if="item.defaultSlot" v-slot:default="slotProps">
          <slot :name="item.defaultSlot" v-bind="slotProps"></slot>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import throttle from 'throttle-debounce/debounce'

export default {
 
  props: {
    // 数据源
    data: {
      type: Array,
      default: () => [],
    },
    // 列数据
    columns: {
      type: Array,
      default: () => [],
    },
    // 是否显示勾选列
    showSelectionCol: {
      type: Boolean,
      default: false,
    },
    // 是否显示序号列
    showIndexCol: {
      type: Boolean,
      default: false,
    },
    // 是否数据为空的图片
    empty: {
      type: Boolean,
      default: false,
    },
    defaultColumnWidth: {
      type: Boolean,
      default: true,
    },
    loadNum: {
      type: Number,
      default: 15,
    },
    limit: Boolean,
  },

  data() {
    return {
      limitData: [],
      count: 0,
      tableDefaultProps: {
        border: true,
        tooltipEffect: 'light',
        highlightCurrentRow: true,
        size: 'mini',
        headerCellStyle: {
          background: '#EEEFF3',
          textAlign: 'center',
          fontSize: '14px',
          color: '#505050',
        },
        cellStyle: function ({ row, column, rowIndex, columnIndex }) {
          let style = { textAlign: 'center' }

          return style
        },
      },
      columnDefaultProps: {
        width: '200',
        showOverflowTooltip: true,
        resizable: true,
      },
    }
  },

  watch: {
    data: {
      handler(val) {
        if (this.limit) {
          this.limitData = val.slice(0, this.loadNum)
          this.count = this.loadNum
        } else {
          this.limitData = val
        }
      },
      immediate: true,
    },
    loadNum: {
      handler(val) {
        this.count = val
      },
      immediate: true,
    },
  },

  computed: {
    tableProps() {
      return Object.assign({}, this.tableDefaultProps, this.$attrs)
    },

    customColumns() {
      return this.columns
        .map((item) => {
          if (this.defaultColumnWidth === false) {
            delete this.columnDefaultProps.width
          }

          let colObj = Object.assign({}, this.columnDefaultProps, item)

          if (!colObj.prop) {
            colObj.prop = colObj.key
          }

          if (colObj.defaultSlot || colObj.headerSlot) {
            colObj.showOverflowTooltip = false
          }

          return colObj
        })
        .filter((item) => !item.hide)
    },

    selection() {
      return this.$refs.table.selection
    },

    setCurrentRow() {
      return this.$refs.table.setCurrentRow
    },

    toggleRowSelection() {
      return this.$refs.table.toggleRowSelection
    },
  },

  mounted() {
    const container = this.$refs.tableWarp.getElementsByClassName(
      'el-table__body-wrapper',
    )[0]

    const handleScroll = () => {
      const scrollBottom = container.scrollTop + container.clientHeight
      const shouldTrigger = container.scrollHeight - scrollBottom <= 0
      if (shouldTrigger) {
        this.load()
      }
    }
    const onScroll = throttle(50, handleScroll)

    onScroll()

    if (this.limit) {
      container.addEventListener('scroll', onScroll)
    }

    this.$once('hook:beforeDestroy', function () {
      container.removeEventListener('scroll', onScroll)
    })
  },

  methods: {
    scrollToBottom() {
      // 由于加了懒加载这里暂时注释掉
      // this.$refs.table.bodyWrapper.scrollTop = this.$refs.table.bodyWrapper.scrollHeight
    },

    load() {
      if (this.limitData?.length < this.data?.length) {
        this.limitData = this.limitData.concat(
          this.data.slice(this.count, this.count + 3),
        )
        this.count += 3
      }
    },
  },
}
</script>

<script>
export default {
    props: {
        buttonList: {
            type: Array,
            default: () => {
                return []
            },
        },
        routeName: {
            type: String,
        },
        permisonCode: {
            type: String,
        },
    },

    data() {
        return {
            defaultAttrs: {
                size: 'small',
            },
        }
    },

    mounted() {},
    render() {
        const { goBack, buttonList, permissionButtonList, defaultAttrs, permisonCode, checkPermission } = this
        return (
            <div class="buttonList">
                <el-page-header onBack={goBack}></el-page-header>

                {permissionButtonList.length &&
                    permissionButtonList.map(item => {
                        if (typeof item.props.disabled === 'function') {
                            item.props.disabled = item.props.disabled(item)
                        }
                        if (typeof item.props.name === 'function') {
                            item.props.name = item.props.name(item)
                        }
                        return (
                            checkPermission(permisonCode, item.props.filterTypeToUpperCase) && (
                                <el-button
                                    {...{ attrs: { ...item.props, ...defaultAttrs } }}
                                    {...{
                                        on: {
                                            ...item.listeners,
                                        },
                                    }}
                                >
                                    {item.props.name}
                                </el-button>
                            )
                        )
                    })}
            </div>
        )
    },
    computed: {
        permissionButtonList: {
            get() {
                let mapArray = new Map([
                    ['新增', 'ADD'],
                    ['导出', 'EXPORT'],
                    ['修改', 'UPDATE'],
                    ['删除', 'DELETE'],
                    ['保存', 'SAVE'],
                    ['提交', 'SUBMIT'],
                    ['审批', 'APPROVAL'],
                    ['取消审批', 'CANCEL-APPROVAL'],
                    ['附件管理', 'ENCLOSURE'],
                    ['作废', 'RECISION'],
                    ['推送待办', 'PUSH-TODO'],
                    ['生效', 'VALID'],
                    ['失效', 'INVALID'],
                    ['复制新增', 'COPY-ADD'],
                    ['待办面板创建XXX单', 'XXX-CREATE'],
                ])
                return this.buttonList.map(item => {
                    item.props.filterTypeToUpperCase = mapArray.get(item.props.name)
                    return item
                })
            },
        },
    },
    methods: {
        goBack() {
            // this.$router.push({ name: this.routeName })
            this.$router.back()
        },
        checkPermission(arg, value) {
            // 不需要配置权限的按钮
            if (value === undefined) {
                return true
            }
            const roles = this.$store.getters && this.$store.getters.roles
            if (value && arg) {
                const permissionRole = `${arg}:${value}`
                const hasPermission = roles.some(role => {
                    return permissionRole === role
                })
                return hasPermission
            } else {
                return false
                // throw new Error(`need name! Like v-permission:CGRK="'EXPORT'"`);
            }
            debugger
        },
    },
}
</script>
<style scoped>
.buttonList {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
}
</style>

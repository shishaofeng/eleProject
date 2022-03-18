// 客户
import Mock, { Random } from 'mockjs'
Mock.mock('@cword')
const id = Mock.mock({
  'id|+1': 712,
})
const code = Mock.mock({
  'code|1-10': '22',
})
const status = Mock.mock({
  'number|1-3': 3,
})
const type = Mock.mock({
  'number|1-3': 3,
})
export default [
  {
    rurl: '/sit-api/api-wms-apply/api/labor/manually/voucher/search/list',
    rtype: 'post',
    template: () => {
      return {
        code: 200,
        data: {
          list: Mock.mock({
            'list|10': [
              {
                ...id,
                ...code,
                ...status,
                statusDesc: Random.cword(5),
                ...type,
                typeDesc: Random.cword(),
                useAd: '',
                useName: '',
                userDeptCode: '',
                userDeptName: '',
                userJobCode: '',
                userJobName: '',
                createBy: '',
                createByName: '',
                editBy: '',
                editByName: '',
                createTime: '',
                editTime: '',
              },
            ],
          })['list'],
        },
      }
    },
  },
  {
    rurl: '/sit-api/api-wms-apply/api/labor/manually/voucher/save',
    rtype: 'post',
    template: () => {
      return {
        code: 200,
        data: '20222223333344',
      }
    },
  },
  {
    rurl: '/sit-api/api-wms-apply/api/labor/manually/voucher/approve',
    rtype: 'post',
    template: () => {
      return {
        code: 200,
        data: '20222223333344',
      }
    },
  },
  {
    rurl: '/sit-api/api-wms-apply/api/labor/manually/voucher/abandon',
    rtype: 'post',
    template: () => {
      return {
        code: 200,
        data: '20222223333344',
      }
    },
  },
  {
    rurl: '/sit-api/api-wms-apply/api/labor/manually/voucher/search/info',
    rtype: 'post',
    template: () => {
      return {
        code: 200,
        data: {
          ...id,
          ...code,
          ...status,
          statusDesc: Random.cword(5),
          ...type,
          typeDesc: Random.cword(),
          reason: '222222',
          useAd: '',
          useName: '',
          userDeptCode: '',
          userDeptName: '',
          userJobCode: '',
          userJobName: '',
          createBy: '',
          createByName: '',
          editBy: '',
          editByName: '',
          createTime: '',
          editTime: '',
          manuallySendConsumeVoucherDtlSaveResps: [
            {
              code: 'LYQ2201190003',
              createBy: 'superAdmin 超管',
              createTime: '2022-01-19 09:25:58',
              editBy: 'liuhongnan 刘红楠',
              editTime: '2022-01-24 10:42:43',
              monthRange: '2,3,4,5,6,7,8,9,10,11,12',
              monthRangeDesc: '2月,3月,4月,5月,6月,7月,8月,9月,10月,11月,12月',
              name: '测试防护券0119',
              range:
                '测试手部防护0019-001;测试手部防护0019-002;测试手部防护0019-003',
              remark: '',
              status: '1',
              statusDesc: '生效',
            },
          ],
        },
      }
    },
  },
]

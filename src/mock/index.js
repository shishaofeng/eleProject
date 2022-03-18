/**
 * 目录结构
 * mock
 *  |_index.js
 *  |_client.js
 *  |_project.js
 *  |...
 *
 */
import Mock from 'mockjs'
import _ from 'lodash'
const context = require.context('./', false, /\.js$/)
const isNull = arg1 => (!arg1 && arg1 !== 0 && typeof arg1 !== 'boolean' ? true : false)

const generatorMock = option => {
    const { rurl, rtype, template } = option
    if (isUrlNotNull(rurl) && !isNull(rtype)) {
        Mock.mock(rurl, rtype, template)
    } else if (isUrlNotNull(rurl)) {
        Mock.mock(rurl, template)
    } else {
        Mock.mock(template)
    }
}

const isUrlNotNull = url => {
    return !isNull(url) || (_.isRegExp(url) && url !== null)
}
/**
 * http://mockjs.com/examples.html
 *
 * Mock.mock(rurl?, rtype?, template|function(options))
 * {
 *  rurl: regex|string  需要拦截的URL
 *  rtype：string  拦截的请求类型，GET、POST、PUT、DELETE
 *  template： object|string|function  数据模版|生成响应数据的函数
 *    object  {'data|1-10':[{}]}
 *    string  '@EMAIL'
 *    function  ({url, type, body}) => {}
 * }
 */
context
    .keys()
    .filter(item => item !== './index.js' && !_.startsWith(item, './_'))
    .forEach(key => {
        const namespace = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
        const options = context(key).default
        if (_.isArray(options)) {
            _.forEach(options, option => generatorMock(option))
        } else if (_.isPlainObject(options)) {
            generatorMock(options)
        }
    })

Mock.setup({
    timeout: '600-1000',
})

export default Mock

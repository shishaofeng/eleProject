const path = require('path')
const webpack = require('webpack'); //访问内置的插件
// 开启gZip压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 提取css
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
//定义开发环境的Boolean
// const nodeEnv = process.env.nodeEnv;
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  outputDir: path.resolve(__dirname, './dist'), //配置开发环境相关的  可以添加proxy属性 配置跨域代理
  devServer: {
    //是否开启热更新
    hot: true, //本地启动地址
    host: '0.0.0.0', //本地启动端口号
    port: 8080, // 是否使用https协议
    https: false, //是否自动打开浏览器
    open: true, // 配置请求代理
    proxy: {
      '/api': {
        target: 'https://www.easy-mock.com/mock/xxxxxxxxxxxxxxx', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端 // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  // 如果是生产环境 则使用生产环境的 source map
  productionSourceMap: !IS_PROD,
  // configureWebpack: {
  //   plugins: [new MiniCssExtractPlugin()],
  //   module: {
  //     rules: [
  //       {
  //         test: /\.css$/i,
  //         use: [MiniCssExtractPlugin.loader, 'css-loader'],
  //       },
  //     ],
  //   },
  // },
  css: {
    extract: true,
  },
  // vue.config.js
  chainWebpack: (config) => {
    config.name = config.name
    const plugins = []
    if (IS_PROD) {
      config.optimization.splitChunks({
        chunks: 'all', // 表明选择哪些 chunk 进行优化。通用设置，可选值：all/async/initial。设置为 all 意味着 chunk 可以在异步和非异步 chunk 之间共享。
        minSize: 20000, // 允许新拆出 chunk 的最小体积
        maxAsyncRequests: 10, // 每个异步加载模块最多能被拆分的数量
        maxInitialRequests: 10, // 每个入口和它的同步依赖最多能被拆分的数量
        enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
        cacheGroups: {
          libs: {
            // 第三方库
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/, // 请注意'[\\/]'的用法，是具有跨平台兼容性的路径分隔符
            priority: 10, // 优先级，执行顺序就是权重从高到低
            chunks: 'initial', // 只打包最初依赖的第三方
          },
          elementUI: {
            // 把 elementUI 单独分包
            name: 'chunk-elementUI',
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 20, // 权重必须比 libs 大，不然会被打包进 libs 里
          },
          commons: {
            name: 'chunk-commons',
            minChunks: 2, // 拆分前，这个模块至少被不同 chunk 引用的次数
            priority: 0,
            reuseExistingChunk: true,
          },
          svgIcon: {
            name: 'chunk-svgIcon',
            // 函数匹配示例，把 svg 单独拆出来
            test(module) {
              // `module.resource` 是文件的绝对路径
              // 用`path.sep` 代替 / or \，以便跨平台兼容
              // const path = require('path') // path 一般会在配置文件引入，此处只是说明 path 的来源，实际并不用加上
              return (
                module.resource &&
                module.resource.endsWith('.svg') &&
                module.resource.includes(`${path.sep}icons${path.sep}`)
              )
            },
            priority: 30,
          },
        },
      })
      // 添加API
      config.plugin('zip').use(CompressionWebpackPlugin, [
        {
          test: /\.(js|css|json|ico|svg)$/, // 匹配文件格式
          algorithm: 'gzip',
          threshold: 10240, // 对超过10k的数据压缩
          minRatio: 0.8, // 压缩比
          filename: '[path][base].gz', // 压缩后的文件名，默认值是 [path][base].gz
          deleteOriginalAssets: false, // 不删除源文件，true 则只保留压缩后的文件
        },
      ])
    }
  },
}

const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
const isProduction = process.env.NODE_ENV === 'production'

const externals = {
  'vue': 'Vue',
  'axios': 'axios'
}

const cdn = {
  dev: {
    css: [],
    js: []
  },
  build: {
    css: [],
    js: [
      'https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.21/vue.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0-beta.1/axios.min.js'
    ]
  }
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  publicPath: BASE_URL,
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    config.plugin('html').tap(args => {
      if (isProduction) {
        args[0].cdn = cdn.build
      }
      return args
    })
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  // 这里写调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }
  configureWebpack: config => {
    if (isProduction) {
      config.plugins.push(new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }))
      config.externals = externals
    }
  }
}

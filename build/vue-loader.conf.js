'use strict'
const utils = require('./utils')
const config = require('../config')
// 不把style单独抽取出来，样式少，多的话可以抽取出啦，但是得单独引用css文件
// const isProduction = process.env.NODE_ENV === 'production'
const isProduction = false
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

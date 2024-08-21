'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./default.env')

module.exports = merge(prodEnv, {
  // 每个环境不同的配置可以在这里配置
  // 腾讯云上传配置
  COS_BUCKET: "'smc-devops-prd-1256914302'",
  COS_REGION: "'ap-shanghai'",
  COS_CDN_PREFIX: "'cos-data.wm-imotor.com'",
  CURRENT_ENV: "'MASTER环境'",
  BASEURL: "'http://39.104.201.236:9014'"
})

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./default.env')

module.exports = merge(prodEnv, {
  NODE_ENV: "'development'",
  BASE_API: "'/openApi'",
  // BASE_API: "'/mockapi/26/welthub'",
  // 腾讯云上传配置
  COS_BUCKET: "'smc-devops-dev-1256914302'",
  COS_REGION: "'ap-shanghai'",
  // 腾讯云上传COS的目录
  COS_UPLOAD_PATH: "'/wm/welthub/'"
})

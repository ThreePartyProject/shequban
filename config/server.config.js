module.exports = {
  serverPort: 9014, // 服务器端口号
  useProxy: false, // 线上环境是否启用Proxy代理
  changeOrigin: true,
  proxyTable: {
    // dev 地址
    '/openApi': {
      // mock 地址
      target: 'http://39.104.201.236:9014/',
      changeOrigin: true,
      pathRewrite: { '^/openApi': '' },
      onProxyReq: function(proxyReq, req, res) {
        console.log('req:', req)
        console.log('原路径1：' + req.originalUrl, '代理路径1：' + req.path)
      }
    }
  }
}

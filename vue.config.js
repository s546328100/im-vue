module.exports = {
  devServer: {
    host: '127.0.0.1',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3002/', // 设置你调用的接口域名和端口号
        changeOrigin: true, // 跨域
        pathRewrite: {
          '^/api': '/',
        },
      },
    }
  },
};

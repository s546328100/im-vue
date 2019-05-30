export const config =
  process.env.NODE_ENV === 'development'
    ? {
        baseUrl: 'http://127.0.0.1:8081',
        socketUrl: 'http://127.0.0.1:3002',
      }
    : {
        baseUrl: 'http://kyun.dusuchao.xin:8081',
        socketUrl: 'http://kyun.dusuchao.xin:3002',
      };

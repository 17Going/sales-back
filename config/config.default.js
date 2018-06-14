'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528814467921_8051';

  // 启动配置
  config.cluster = {
    listen: {
      port: 8080,
      hostname: 'localhost',
    },
  };

  // 日志配置
  config.logger = {
    level: 'DEBUG',
  };

  // session配置
  config.session = {
    key: 'EGG_SESS',
    maxAge: 30 * 60 * 1000, // 1 天
    httpOnly: true,
    encrypt: false,
    renew: true, // 自动刷新session有效期
  };

  // 配置中间件
  config.middleware = ['error'];

  config.error = {
    match: '/api',
  }

  return config;
};


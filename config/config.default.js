'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1528814467921_8051';

  // 启动配置
  config.cluster = {
    listen: {
      port: 8080,
      hostname: 'localhost',
    },
  };

  config.view = {
    enable: true,
    package: 'egg-view',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  config.security = {
    domainWhiteList: [ '*' ],
  };
  // 日志配置
  config.logger = {
    level: 'DEBUG',
  };

  // session配置
  config.session = {
    key: 'EGG_SESS',
    maxAge: 30 * 60 * 1000, // 30分钟
    httpOnly: true,
    encrypt: false,
    renew: true, // 自动刷新session有效期
  };

  // 配置中间件
  config.middleware = [ 'error' ];

  config.error = {
    match: '/api',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '118.25.127.172',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'mysql',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return config;
};


'use strict';

module.exports = () => {
  class Model {
    constructor(ctx) {}

    /** 获取token */
    getClient(clientId, clientSecret, callback) {
      if (clientId === 'my_app' && clientSecret === 'my_secret') {
        callback(null, {
          clientId,
          clientSecret,
          grants: ['password']
        });
      }
      callback(null, null);
    }

    getUser(username, password) {
      return {
        username,
        password
      }
    }

    validateScope(user, client, scope) {
      return scope;
    }

    saveToken(token, client, user) {
      // 保存token
      return { ...token,
        client,
        user
      };
    }

    /**
     * 验证token
     */

    getAccessToken(accessToken, callback) {
      callback(null, {
        accessToken,
        accessTokenExpiresAt: new Date('2018/6/20'),
        user: {
          username: 'test',
          password: '123456'
        }
      });
    }
  }
  return Model;
};
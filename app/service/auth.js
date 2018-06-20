'use strict';
const Service = require('egg').Service;
const TABLE_NAME = 'auth';

function now() {
    return new Date().getTime();
  }

class AuthService extends Service {

    async add( auth ) {
        auth = {...auth, createTime: now(), updateTime: now()}
        const result = await this.app.mysql.insert(TABLE_NAME, auth);
        return result.insertId;
    }

    async del ( auth ){

    }
}
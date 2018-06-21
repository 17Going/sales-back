'use strict';

const Service = require('egg').Service;
const {now, STATUS_DELETE, STATUS_NORMAL} = require('../config');
const TABLE_NAME = 'auth';
const QUERY_STR = 'id, authName, authValue, createTime, updateTime';

class AuthService extends Service {

    async create( auth ) {
        auth = {...auth, createTime: now(), updateTime: now()}
        const result = await this.app.mysql.insert(TABLE_NAME, auth);
        return result.insertId;
    }

    async query( auth ) {
        const TABLE_NAME = 'auth';
        const QUERY_STR = 'id, authName, authValue, createTime, updateTime';
        let sql = `select ${QUERY_STR} from ${TABLE_NAME} where authName like "%${auth.authName}%"`;
        const row = await this.app.mysql.query(sql);
        return row;
    }

    async delete ( id ) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 201, msg: '权限角色不存在'}
        }
        // TODO 有人配置了此权限不能删除
        row.status = STATUS_DELETE;
        return await this.update(row, true);
    }

    async update ( auth , isDel) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 201, msg: '权限角色不存在'}
        }
        if(!isDel) {
            delete auth.status;
        }
        const result = await this.app.mysql.update(TABLE_NAME, auth);
        return result.affectedRows == 1;
    }

    async get( id ) {
        let sql = `select id, authName, authValue, createTime, updateTime
        from ${TABLE_NAME} where id= ${id} and status <> ${STATUS_DELETE} limit 1`;
        
        const row = await this.app.mysql.query(sql);
        return row && row[0];
    }
}

module.exports = AuthService;
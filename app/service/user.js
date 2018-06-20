'use strict';

const Service = require('egg').Service;
const {now, STATUS_DELETE, STATUS_NORMAL} = require('../config');

const TABLE_NAME = 'user_info';

class JobService extends Service {

    async create( user ) {
        user = {...user, createTime: now(), updateTime: now()}
        // 设置默认密码
        const result = await this.app.mysql.insert(TABLE_NAME, user);
        return result.insertId;
    }

    async delete ( id ) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 401, msg: '用户不存在'}
        }
        row.status = STATUS_DELETE;
        return await this.update(row, true);
    }

    async update ( user , isDel) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 401, msg: '用户不存在'}
        }
        if(!isDel) {
            delete user.status;
        }
        const result = await this.app.mysql.update(TABLE_NAME, user);
        return result.affectedRows == 1;
    }

    async get( id ) {
        let sql = `select id, userName, password, phone, email, cap, depId, jobId, authId
        from ${TABLE_NAME} where id= ${id} and status <> ${STATUS_DELETE} limit 1`;
        
        const row = await this.app.mysql.query(sql);
        return row && row[0];
    }

}
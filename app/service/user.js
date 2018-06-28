'use strict';

const Service = require('egg').Service;
const {now, STATUS_DELETE, STATUS_NORMAL, DEFAULT_PASSWORD} = require('../config');
const md5 = require('md5');

const TABLE_NAME = 'user';
const QUERY_STR = 'id, userName, password, phone, email, cap, depId, jobId, authId';

class UserService extends Service {

    async create( user ) {
        user = {...user, createTime: now(), updateTime: now()}
        // 设置默认密码
        user.password = md5(DEFAULT_PASSWORD);
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
        let sql = `select ${QUERY_STR} from ${TABLE_NAME} where id= ${id} and status <> ${STATUS_DELETE} limit 1`;
        
        const row = await this.app.mysql.query(sql);
        return row && row[0];
    }

    async query( user ) {
        const {ctx , app} = this;
        // 并列查询
        const where = ctx.helper.where(user);
        let sql = `select ${QUERY_STR} from ${TABLE_NAME} where ${where}`;
        const row = await app.mysql.query(sql);
        return row;
    }

    async count( query ) {
        const {ctx , app} = this;
        const where = ctx.helper.where(query, 'user.');
        let sql = `select count(user.id) count from user 
            left join department on user.depId = department.id
            left join auth on user.authId = auth.id 
            left join job on user.jobId = job.id 
            where ${where}`;

        const row = await this.app.mysql.query(sql);
        return row && row[0].count;
    }

    async getAll( query ) {
        const {ctx , app} = this;
        const offset = query.pageSize*(query.pageIndex - 1);
        const where = ctx.helper.where(query.query, 'user.');
        const order = ctx.helper.order(query.order);

        let sql = `select user.id, user.userName, user.phone, user.cap,
            user.email, user.status, user.createTime, user.updateTime,
            department.depName,auth.authName,job.jobName
            from user left join department on user.depId = department.id
            left join auth on user.authId = auth.id 
            left join job on user.jobId = job.id 
            where ${where}
            group by user.id
            ${order}
            limit ${offset}, ${query.pageSize}`;

        const row = await this.app.mysql.query(sql);
        return row;
    }


}

module.exports = UserService;
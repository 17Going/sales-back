'use strict';

const Service = require('egg').Service;
const {now, STATUS_DELETE, STATUS_NORMAL} = require('../config');

const TABLE_NAME = 'job';

class JobService extends Service {

    async create( job ) {
        job = {...job, createTime: now(), updateTime: now()}
        const result = await this.app.mysql.insert(TABLE_NAME, job);
        return result.insertId;
    }

    async delete ( id ) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 301, msg: '职位不存在'}
        }
        row.status = STATUS_DELETE;
        return await this.update(row, true);
    }

    async update ( job , isDel) {
        let row = await this.get(id);
        if(!row) {
            throw {code: 301, msg: '职位不存在'}
        }
        if(!isDel) {
            delete job.status;
        }
        const result = await this.app.mysql.update(TABLE_NAME, job);
        return result.affectedRows == 1;
    }

    async get( id ) {
        let sql = `select id, jobName, description, createTime, updateTime
        from ${TABLE_NAME} where id= ${id} and status <> ${STATUS_DELETE} limit 1`;
        
        const row = await this.app.mysql.query(sql);
        return row && row[0];
    }
    
}

module.exports = JobService;
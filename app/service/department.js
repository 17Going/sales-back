'use strict';
const Service = require('egg').Service;

const tableName = 'department'

class DepartmentService extends Service {
  async create(dep) {
    const result = await this.app.mysql.insert(tableName, dep);
    return result.affectedRows == 1;
  }
};

module.exports = DepartmentService;
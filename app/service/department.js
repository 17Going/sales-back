'use strict';
const Service = require('egg').Service;

const tableName = 'department';

class DepartmentService extends Service {
  async add(dep) {
    const result = await this.app.mysql.insert(tableName, dep);
    return result.affectedRows == 1;
  }

  async get(id) {
    const dep = await this.app.mysql.get(tableName, { id });
    return dep;
  }
}

module.exports = DepartmentService;

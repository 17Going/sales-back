'use strict';
const Service = require('egg').Service;

class DepartmentService extends Service {
  async create(dep) {
    const result = await this.app.mysql.insert('department', dep);
    return result.affectedRows == 1;
  }
};

module.exports = DepartmentService;
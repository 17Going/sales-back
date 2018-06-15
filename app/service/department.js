'use strict';
const Service = require('egg').Service;

const tableName = 'department';

class DepartmentService extends Service {
  /**
   * 新增部门
   * @param {Object} dep 
   */
  async add(dep) {
    const result = await this.app.mysql.insert(tableName, dep);
    return result.insertId;
  }

  /**
   * 根据id,查询部门
   * @param {Number} id 
   */
  async get(id) {
    const dep = await this.app.mysql.get(tableName, { id });
    return dep;
  }

  /**
   * 根据父级id查询部门（多个）
   * @param {Number} id 
   */
  async getDepsByParentId(parentId) {
    const deps = await this.app.mysql.select(tableName, {
      where: { parentId }
    });
    return deps;
  }

  /**
   * 更新部门信息
   * @param {Object} dep 
   */
  async update(dep) {
    const result = await this.app.mysql.update(tableName, dep);
    console.log(result);
    return result.affectedRows === 1;
  }

  /**
   * 删除部门
   * @param {Number} id 
   */
  async del(id) {
    const result = await this.app.mysql.delete(tableName, {
      id
    });
    return result.affectedRows === 1;
  }

  async getAll() {
    let root = await this.getDepsByParentId(0);
    let children = await this.getDeps(root[0].id);

    return {
      ...root[0],
      children
    }
  }

  async getDeps(id) {
    let children = [];
    let data = await this.getDepsByParentId(id);
    if (data.length !== 0) {
      for(let i = 0, len = data.length; i < len; i++){
        let child = await this.getDeps(data[i].id);
        children.push({
          ...data[i],
          children: child
        });
      }
      return children;
    } else {
      return [];
    }
  }
}

module.exports = DepartmentService;

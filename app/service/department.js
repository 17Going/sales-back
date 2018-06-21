'use strict';

const Service = require('egg').Service;
const {now, STATUS_DELETE, STATUS_NORMAL} = require('../config');

const TABLE_NAME = 'department';

class DepartmentService extends Service {

  async create(dep) {
    dep = {
      ...dep, 
      createTime: now(), 
      updateTime: now()
    };

    if(dep.parentId == 0){
      const rows = await this.getDepsByParentId(0);
      if(rows && rows[0]){
        throw {code: 101, msg: '公司已存在'};
      }
    } else {
      const row = await this.get(dep.parentId);
      if(!row){
        throw {code: 102, msg: '父级部门不存在'};
      }
    }
    const result = await this.app.mysql.insert(TABLE_NAME, dep);
    return result.insertId;
  }

  async delete(id) {
    let dep = await this.get(id);
    if(!dep){
      throw {code: 103, msg: '部门不存在'};
    } else if(dep.parentId == 0){
      throw {code: 104, msg: '公司不能被删除'};
    } else {
      let rows = await this.getDepsByParentId(id);
      if(rows && rows[0]){
        throw {code: 105, msg: '存在子级部门不能被删除'};
      } else {
          // TODO 查询部门下是否存在员工，存在员工不能被删除
          dep.status = STATUS_DELETE;
          return await this.update(dep, true);
      }
    }
  }

  async update(dep, isDel) {
    dep.updateTime = now();
    let row = await this.get(dep.id);
    if(!row){
      throw {code: 103, msg: '部门不存在'};
    }
    //防止更新时，删除数据
    if(!isDel){
      delete dep.status;
    }
    const result = await this.app.mysql.update(TABLE_NAME, dep);
    return result.affectedRows === 1;
  }

  async get(id) {
    let sql = `select id,depName, parentId,createTime,updateTime
      from ${TABLE_NAME} where id= ${id} and status <> ${STATUS_DELETE} limit 1`;
    
    const row = await this.app.mysql.query(sql);
    return row && row[0];
  }

  async getDepsByParentId(parentId) {
    const deps = await this.app.mysql.select(TABLE_NAME, {
      where: { parentId },
      columns: ['id', 'depName', 'parentId', 'createTime', 'updateTime']
    });
    return deps;
  }

  async getAll() {
    let root = await this.getDepsByParentId(0);
    let deps = await this.app.mysql.select(TABLE_NAME,{
      columns: ['id', 'depName', 'parentId', 'createTime', 'updateTime']
    });
    let children = this.getDeps(root[0].id, deps);
    return {
      ...root[0],
      children
    }
  }

  getChildren(id, data){
    let result = []; 
    data.map((item)=>{
      if(item.parentId == id){
        result.push(item);
      }
    });
    return result;
  }

  getDeps(id, deps) {
    let children = [];
    let data = this.getChildren(id, deps);
    if (data.length !== 0) {
      for(let i = 0, len = data.length; i < len; i++){
        let child = this.getDeps(data[i].id, deps);
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

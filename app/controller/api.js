'use strict';
const Controller = require('egg').Controller;

const list = [{
  title: '创建公司名称：/api/department/create POST',
  params: [{
    name: 'name(公司名称)',
    type: 'string',
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 创建成功'
  ]
},{
  title: '创建部门：/api/department/add POST',
  params: [{
    name: 'name(部门名称)',
    type: 'string',
    default: ''
  },{
    name: 'parentId（父级部门ID）',
    type: 'number',
    default: '0'
  }],
  response: [
    '{ code: "0", data: [] } 创建成功',
    '{ code: "10002", msg: "父级部门不存在或已被删除" } 创建失败'
  ]
},{
  title: '更新部门信息：/api/department/update PUT',
  params: [{
    name: 'id',
    type: 'number',
    default: ''
  },{
    name: 'name(公司名称)',
    type: 'string',
    default: ''
  },{
    name: 'parentId（父级部门ID）',
    type: 'number',
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 更新成功'
  ]
},{
  title: '删除部门：/api/department/del DELETE',
  params: [{
    name: 'id',
    type: 'number',
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 删除成功'
  ]
},{
  title: '获取组织架构：/api/department/getAll GET',
  params: [],
  response: [
    '{ code: "0", data: [{"id": 1, "name": "xxx", "parentId": 0, "createTime": 1528990036749, children:[....]}] } 查询成功'
  ]
}]


class ApiController extends Controller {
  async index() {
    const { app, ctx } = this;
    await ctx.render('index', {list});
  }
}
module.exports = ApiController;

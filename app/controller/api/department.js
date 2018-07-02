'use strict';
const Controller = require('egg').Controller;

const list = [{
  title: '创建公司或部门：/api/department/create POST',
  params: [{
    name: 'depName(部门名称)',
    type: 'string',
    need: true,
    default: ''
  },{
    name: 'parentId（父级部门ID）创建公司传0',
    need: true,
    type: 'number',
    default: ''
  }],
  response: [
    '{ code: "0", data: {id:xxx} } 创建成功',
    '{ code: "101", msg: "公司已存在" } 创建失败',
    '{ code: "102", msg: "父级部门不存在" } 创建失败'
  ]
},{
  title: '删除部门：/api/department/delete DELETE',
  params: [{
    name: 'id',
    type: 'number',
    need: true,
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 删除成功'
  ]
},{
  title: '更新部门信息：/api/department/update PUT',
  params: [{
    name: 'id',
    type: 'number',
    need: true,
    default: ''
  },{
    name: 'depName(公司名称)',
    type: 'string',
    need: false,
    default: ''
  },{
    name: 'parentId（父级部门ID）修改=移动部门',
    type: 'number',
    need: false,
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 更新成功'
  ]
},{
  title: '获取组织架构：/api/department/getAll GET',
  params: [],
  response: [
    '{ code: "0", data: [{"id": 1, "depName": "xxx", "parentId": 0, "createTime": 1528990036749, children:[....]}] } 查询成功'
  ]
}]


class ApiDepController extends Controller {
  async index() {
    const { app, ctx } = this;
    await ctx.render('index', {list});
  }
}

module.exports = ApiDepController;

'use strict';
const Controller = require('egg').Controller;

const list = [{
  title: '创建权限：/api/auth/create POST',
  params: [{
    name: 'authName',
    type: 'string',
    need: true,
    default: ''
  },{
    name: 'authValue (符合JSON格式的字符串否则参数不对)',
    need: true,
    type: 'string',
    default: ''
  }],
  response: [
    '{ code: "0", data: {id: xxx} } 创建成功'
  ]
},{
  title: '更新权限：/api/auth/create PUT',
  params: [{
    name: 'id',
    type: 'number',
    need: true,
    default: ''
  },{
    name: 'authName',
    type: 'string',
    need: false,
    default: ''
  },{
    name: 'authValue (符合JSON格式的字符串否则参数不对)',
    need: false,
    type: 'string',
    default: ''
  }],
  response: [
    '{ code: "0", data: [] } 创建成功',
    '{ code: "201", msg: "xxx"} 创建失败'
  ]
}]


class ApiAuthController extends Controller {
  async index() {
    const { app, ctx } = this;
    await ctx.render('index', {list});
  }
}

module.exports = ApiAuthController;

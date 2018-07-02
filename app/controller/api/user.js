'use strict';
const Controller = require('egg').Controller;

const list = [{
  title: '创建员工：/api/user/create POST',
  params: [{
    name: 'userName(用户名)',
    type: 'string',
    need: true,
    default: ''
  },{
    name: 'phone',
    need: true,
    type: 'string',
    default: ''
  },{
    name: 'email',
    need: true,
    type: 'string',
    default: ''
  },{
    name: 'depId',
    need: false,
    type: 'number',
    default: ''
  },{
    name: 'jobId',
    need: false,
    type: 'number',
    default: ''
  },
  {
    name: 'authId',
    need: false,
    type: 'number',
    default: ''
  }],
  response: [
    '{ code: "0", data: {id:xxx} } 创建成功'
  ]
},{
  title: '查询员工：/api/user/list GET',
  params: [{
    name: 'pageSize 每页数量',
    type: 'number',
    need: true,
    default: ''
  },{
    name: 'pageIndex 当前页面',
    need: true,
    type: 'number',
    default: ''
  },{
    name: 'query 查询条件',
    need: false,
    type: 'Object',
    default: ''
  },{
    name: 'query.userName 模糊查询名称',
    need: false,
    type: 'string',
    default: ''
  },{
    name: 'query.phone 模糊查询手机号',
    need: false,
    type: 'string',
    default: ''
  },{
    name: 'query.depId 精确查询部门 缺省查询全部员工',
    need: false,
    type: 'number',
    default: ''
  },{
    name: 'query.status 精确员工状态',
    need: false,
    type: 'number',
    default: ''
  },{
    name: 'order 排序',
    need: false,
    type: 'Object',
    default: ''
  },{
    name: 'order.userName 按名称排序 值： "desc"降序 | "asc"升序',
    need: false,
    type: 'string',
    default: ''
  },{
    name: 'order.phone 按手机号排序 值： "desc"降序 | "asc"升序 依次类推所有的显示字段都可以排序',
    need: false,
    type: 'string',
    default: ''
  }],
  response: [
  `{ code: "0", data: {
    activeStaffCount: 0,
    undistributedCount: 0,
    totalCount: 2,
    list: [{id, userName, phone, email, status,depName,authName,jobName}]
} } 查询成功'`]
}]


class ApiUserController extends Controller {
  async index() {
    const { app, ctx } = this;
    await ctx.render('index', {list});
  }
}

module.exports = ApiUserController;

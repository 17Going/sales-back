'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.service.department.create({
      name: '122',
      parentId: 0,
      createTime: new Date().getTime()
    });
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;

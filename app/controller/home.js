'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.service.department.create({
      departmentName: '122',
      parentId: 0,
    });
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;

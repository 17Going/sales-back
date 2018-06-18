'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, service } = this;
    ctx.body = '';
  }
}

module.exports = LoginController;

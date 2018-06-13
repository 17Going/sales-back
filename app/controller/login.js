'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx, service } = this;
    const createRule = {
      username: {
        type: 'string'
      },
      passwrod: {
        type: 'string'
      }
    }
    console.log(ctx.toJSON)
    ctx.body = ctx.toJSON({name:122})
  }
}

module.exports = LoginController;
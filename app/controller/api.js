'use strict';
const path = require('path');
const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { app, ctx } = this;
    await ctx.render('index');
  }
}
module.exports = ApiController;

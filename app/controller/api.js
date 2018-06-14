'use strict';
const path = require('path');
const Controller = require('egg').Controller;

class ApiController extends Controller {
    async index(){
        const {app, ctx } = this;
        ctx.render(path.join(app.config.baseDir, 'app/public/index.html'));
    }
}
module.exports = ApiController;
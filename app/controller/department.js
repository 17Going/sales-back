'use strict';

const Controller = require('egg').Controller;

class DepartmentController extends Controller {
    async create() {
        const { ctx, service } = this;
        const rule = {
            name: { type: 'string' },
            parentId: { type: 'number' }
        }
        // 校验参数
        ctx.validate(rule);
        let dep = Object.assign(ctx.request.body, { createTime: new Date().getTime() });
        var result = await service.department.create(dep);
        if(result){
            ctx.body = helper.success();
        } else {
            ctx.body = false;
        }
    }
}

module.exports = DepartmentController;
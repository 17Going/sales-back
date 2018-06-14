'use strict';

const Controller = require('egg').Controller;

class DepartmentController extends Controller {

    /**
     * 创建公司：
     * 1、parentId = 0
     */
    async createCompany(){
        const { ctx, service } = this;
        const rule = {
            name: { type: 'string' }
        };
        ctx.validate(rule);
        const dep = Object.assign(ctx.request.body, { parentId: 0, createTime: new Date().getTime() });
        const result = await service.department.add(dep);
        if(result) {
            ctx.body = ctx.helper.success([]);
        } else {
            ctx.body = ctx.helper.fail('10003');
        }
        ctx.status = 200;
    }
    
    /**
     * 创建部门：
     *  1、特殊创建公司（parentId: 0 为顶级部门）
     *  2、创建子部门之前，需判断父级部门是否存在
     */
    async add() {
        const { ctx, service } = this;
        const rule = {
            name: { type: 'string' },
            parentId: { type: 'number' },
        };
        // 校验参数
        ctx.validate(rule);
        // 查询父级部门是否存在
        var faDep = await service.department.get(ctx.request.body.parentId);
        if (faDep) {
            const dep = Object.assign(ctx.request.body, { createTime: new Date().getTime() });
            const result = await service.department.add(dep);
            if (result) {
                ctx.body = ctx.helper.success([]);
            } else {
                ctx.body = ctx.helper.fail('10001');
            }
        } else {
            ctx.body = ctx.helper.fail('10002');
        }
        ctx.status = 200;
    }
}

module.exports = DepartmentController;

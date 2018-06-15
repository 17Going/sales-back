'use strict';

const Controller = require('egg').Controller;

const createRule = {
    name: { type: 'string' },
    parentId: { type: 'number' },
};

const updateRule = {
    id: { type: 'number'},
    name: { type: 'string' },
};

const delRule = {
    id: {type: 'number'}
}

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
        // 校验参数
        ctx.validate(createRule);
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

    /**
     * 获取组织结构
     */
    async getAll() {
        const { ctx , service } = this;
        const result = await service.department.getAll();
        ctx.body = ctx.helper.success(result);
        ctx.status = 200;
    }

    /**
     * 更新部门
     */
    async update() {
        const {ctx, service} = this;
        ctx.validate(updateRule);
        await service.department.update(ctx.request.body);
        ctx.body = ctx.helper.success([]);
        ctx.status = 200;
    }

    /**
     * 删除部门
     */
    async del() {
        const { ctx, service } = this;
        ctx.validate(delRule);
        const { id } = ctx.request.body;
        await service.department.del(id);
        ctx.body = ctx.helper.success([]);
        ctx.status = 200;
    }
}

module.exports = DepartmentController;

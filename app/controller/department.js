'use strict';

const Controller = require('egg').Controller;

const createRule = {
    depName: { type: 'string' },
    parentId: { type: 'number' },
};

const updateRule = {
    id: { type: 'number'},
    depName: { type: 'string' },
};

const delRule = {
    id: {type: 'number'}
}

class DepartmentController extends Controller {

    async create(){
        const { ctx, service } = this;
        ctx.validate(createRule);
        try{
            const id = await service.department.create(ctx.request.body);
            ctx.body = ctx.helper.success({id});
        } catch(e){
            ctx.body = e;
        }finally{
            ctx.status = 200;
        }
    }

    async delete() {
        const { ctx, service } = this;
        ctx.validate(delRule);
        const { id } = ctx.request.body;
        try{
            await service.department.delete(id);
            ctx.body = ctx.helper.success([]);
        }catch( e ){
            ctx.body = e;
        } finally{
            ctx.status = 200;
        }
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
        try{
            await service.department.update(ctx.request.body);
            ctx.body = ctx.helper.success([]);
        }catch( e ){
            ctx.body = e;
        } finally{
            ctx.status = 200;
        }
    }
    
}

module.exports = DepartmentController;

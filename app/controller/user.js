'use strict';

const Controller = require('egg').Controller;

const createRule = {
    userName: { type: 'string'},
    phone: { type: 'number' },
    email: { type: 'email' },
    depId: {type: 'number'}, 
    jobId: {type: 'number'}, 
    authId: {type: 'number'}
}

const delRule = {
    id: { type: 'number', require: true}
}

class UserController extends Controller {
    async create(){
        const { ctx, service } = this;
        ctx.validate(createRule);
        try{
            await service.user.create(ctx.request.body);
            ctx.body = ctx.helper.success([]);
        } catch(e){
            ctx.body = e;
        }finally{
            ctx.status = 200;
        }
    }

    async delete(){
        const { ctx, service } = this;
        ctx.validate(delRule);
        const { id } = ctx.request.body;
        try{
            await service.user.delete(id);
            ctx.body = ctx.helper.success([]);
        }catch( e ){
            ctx.body = e;
        } finally{
            ctx.status = 200;
        }
    }
}

module.exports = UserController;
'use strict';

const Controller = require('egg').Controller;

const createRule = {
    authName: {type: 'string'},
    authValue: {type: 'string'}
}

const updateRule = {
    id: {type: 'number'},
    authName: {type: 'string', required: false},
    authValue: {type: 'string', required: false}
}

class authController extends Controller {
    async create(){
        const {ctx, service} = this;
        ctx.validate(createRule);
        try{
           const id = await service.auth.create(ctx.request.body);
           ctx.body = ctx.helper.success({id});
        }catch(e){
            ctx.body = e;
        }finally{
            ctx.status = 200;
        }
    }
    
    async update(){
        const {ctx, service} = this;
        ctx.validate(updateRule);
        try{
            await service.auth.update(ctx.request.body);
            ctx.body = ctx.helper.success([]);
         }catch(e){
             ctx.body = e;
         }finally{
             ctx.status = 200;
         }
    }
}

module.exports = authController;
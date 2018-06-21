'use strict';
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/auth.test.js', () => {

    it('service 创建权限角色', async () => {
        const ctx = app.mockContext();
        let id;
        try{
            id = await ctx.service.auth.create({
                authName: '总经理',
                authValue: "{}"
            });
            assert(id);
        } catch(e){
            console.log(e);
            assert(e.code == 201)
        }
    });

    it('service 模糊查询权限角色', async ()=>{
        const ctx = app.mockContext();
        let auths = await ctx.service.auth.query({
            authName: '管'
        });
        assert(auths);
        assert(auths[0].authName.includes('管'));
    });

});
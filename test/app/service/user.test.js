'use strict';
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {

    // it('service 创建权限角色', async () => {
    //     const ctx = app.mockContext();
    //     let id;
    //     try{
    //         id = await ctx.service.auth.create({
    //             authName: '总经理',
    //             authValue: "{}"
    //         });
    //         assert(id);
    //     } catch(e){
    //         console.log(e);
    //         assert(e.code == 201)
    //     }
    // });

    it('service 模糊查询', async ()=>{
        const ctx = app.mockContext();
        let user = await ctx.service.user.query({
            userName: '121',
            jobId: [1,2,3]
        });
        assert(user);
        // assert(user[0].authName.includes('管'));
    });

});
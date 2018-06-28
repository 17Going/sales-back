'use strict';
const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/user.test.js', () => {

    // it('service 创建用户', async () => {
    //     const ctx = app.mockContext();
    //     let id;
    //     try{
    //         id = await ctx.service.user.create({
    //             userName: 'admin',
    //             password: "admin@1234",
    //             phone: '17701023509',
    //             email: '17701023509@qq.com',
    //             depId: 4
    //         });
    //         assert(id);
    //     } catch(e){
    //         console.log(e);
    //         assert(e.code == 201)
    //     }
    // });

    // it('service 模糊查询', async ()=>{
    //     const ctx = app.mockContext();
    //     let user = await ctx.service.user.query({
    //         userName: '121',
    //         jobId: [1,2,3]
    //     });
    //     assert(user);
    //     // assert(user[0].authName.includes('管'));
    // });

    it('service 查询全部员工', async()=>{
        const ctx = app.mockContext();
        let users = await ctx.service.user.getAll({pageSize: 10, pageIndex: 1});
        assert(users);
    })

});
'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/department.test.js', () => {

    it('service 创建部门', async () => {
        const ctx = app.mockContext();
        let id;
        try{
            id = await ctx.service.department.create({
                depName: '唐唐软件有限公司',
                parentId: 0
            });
            assert(id);
        } catch(e){
            console.log(e);
            assert(e.code == 101)
        }
    });

    it('service 删除部门', async () => {
        const ctx = app.mockContext();
        try{
            const result = await ctx.service.department.delete(2);
            assert(result == true);
        }catch( e ){
            console.log(e);
            assert(e.code == 103);
        }
    });

    it('service 更新部门', async () => {
        const ctx = app.mockContext();
        try{
            const result = await ctx.service.department.update({
                id: 3,
                depName: '事业部'
            });
            assert(result == true);
        }catch( e ){
            console.log(e);
            assert(e.code == 103);
        }
    });

    it('service 获取公司组织结构', async () => {
        const ctx = app.mockContext();
        const result = await ctx.service.department.getAll();

        assert(result);
        assert(result.children && result.children.length);
    });



    // it('根据id查询部门', async () => {
    //     const ctx = app.mockContext();
    //     const dep = await ctx.service.department.get(1);
    //     assert(dep);
    //     assert(dep.depName === '成都四方伟业软件股份有限公司');
    // });

    // it('修改部门信息', async () => {
    //     const ctx = app.mockContext();
    //     oldDep.name = 'update' + new Date().getSeconds();
    //     const result = await ctx.service.department.update(oldDep);
    //     assert(result == true);
    //     const dep = await ctx.service.department.get(oldDep.id);
    //     assert(dep.name == oldDep.name);
    // });

    // it('根据parentId查询部门', async () =>{
    //     const ctx = app.mockContext();
    //     const deps = await ctx.service.department.getDepsByParentId(oldDep.parentId);
    //     assert(deps.length != 0);
    // });

    // it('根据id 删除部门', async () => {
    //     const ctx = app.mockContext();
    //     const result = await ctx.service.department.del(2);
    //     assert(result == true);
    // });

    // it('获取公司组织结构', async () => {
    //     const ctx = app.mockContext();
    //     const result = await ctx.service.department.getAll();
    //     assert(result.name == '销售部');
    // });

});

'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/service/department.test.js', () => {
    let oldDep, oldId;

    it('创建部门', async () => {
        const ctx = app.mockContext();
        const id = await ctx.service.department.add({
            name: '销售部',
            parentId: 1,
            createTime: new Date().getTime()
        });
        assert(id !== 0);
        oldId = id;
    });

    it('根据id查询部门', async () => {
        const ctx = app.mockContext();
        const dep = await ctx.service.department.get(oldId);
        console.log(dep);
        assert(dep);
        assert(dep.name === '销售部');
        oldDep = dep;
    });

    it('修改部门信息', async () => {
        const ctx = app.mockContext();
        oldDep.name = 'update' + new Date().getSeconds();
        const result = await ctx.service.department.update(oldDep);
        assert(result == true);
    });

    it('根据parentId查询部门', async () =>{
        const ctx = app.mockContext();
        const deps = await ctx.service.department.getDepsByParentId(oldDep.parentId);
        assert(deps.length != 0);
    });

    it('根据id 删除部门', async () => {
        const ctx = app.mockContext();
        const result = await ctx.service.department.del(oldId);

        assert(result == true);
    });

});

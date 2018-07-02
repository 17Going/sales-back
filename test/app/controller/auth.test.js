'use strict';

/**
 * 权限单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/auth.test.js', () => {
    it('controller 权限新建', ()=>{
        app.mockCsrf();
        return app.httpRequest()
            .post('/api/auth/create')
            .send({
                authName: '管理员1',
                authValue: JSON.stringify({a: 1})
            })
            .expect(200)
            .then(res=>{
                assert(res.body.data);
            })
    });

    it('controller 更新权限角色', ()=>{
        app.mockCsrf();
        return app.httpRequest()
            .put('/api/auth/update')
            .send({
                id: 3,
                authName: '业务员',
                authValue: JSON.stringify({a: 2})
            })
            .expect(200)
            .then(res=>{
                assert(res.body.data);
            })
    });
})
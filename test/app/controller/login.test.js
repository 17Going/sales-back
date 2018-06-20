'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/login.test.js', () => {
    // it('登录', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //     .post('/login')
    //     .set('Content-Type', 'application/x-www-form-urlencoded')
    //     // .set('authorization', 'Basic bXlfYXBwOm15X3NlY3JldA==')
    //     .send({
    //         client_id: 'my_app',
    //         client_secret: 'my_secret',
    //         scope: 'sales',
    //         grant_type: 'password',
    //         username: 'test',
    //         password: '123456',
    //     })
    //     .expect((res) => {
    //         // console.log(res);
    //         assert(res.body.access_token);
    //     })
    // });

    // it('验证token', () => {
    //     // app.mockCsrf();
    //     return app.httpRequest()
    //     .get('/api/department/getAll')
    //     .set('Authorization', 'Bearer 91183cc1e92e67010d82c88e8027c8e1dcf6588')
    //     //91183cc1e92e67010d82c88e8027c8e1dcf6588b
    //     .expect(200)
    // });
})
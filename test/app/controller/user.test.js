'use strict';

/**
 * 单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/user.test.js', () => {
    it('controller 获取表格数据', () => {
        app.mockCsrf();
        return app.httpRequest()
        .post('/api/user/getAll')
        .send({

        })
        .expect((res) => {
            console.log(res);
            assert(res.body);
        })
    });

})
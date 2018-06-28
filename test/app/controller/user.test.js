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
        .get('/api/user/getAll')
        .send({
            // pageSize: 10,
            pageIndex: 1,
            query:{
                depId: 4,
                // userName: '总经理',
                phone: '177',
                status: 0
            }
        })
        .expect((res) => {
            console.log(res.body.data.list.length)
            assert(res.body.data.list);
        })
    });

})
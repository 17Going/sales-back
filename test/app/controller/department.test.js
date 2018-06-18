'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/department.test.js', () => {

    //   it('创建公司', () => {
    //     app.mockCsrf();
    //     // return app.httpRequest()
    //     //   .post('/api/department/create')
    //     //   .send({
    //     //     name: '成都四方伟业软件股份有限公司'
    //     //   })
    //     //   .expect(200, {
    //     //     code: 0,
    //     //     data: []
    //     //   });
    //   });

    // it('部门创建', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .post('/api/department/add')
    //         .send({
    //             name: '销售部',
    //             parentId: 16
    //         })
    //         .expect(200, {
    //             code: 0,
    //             data: []
    //         });
    // });

    // it('部门更新', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .put('/api/department/update')
    //         .send({
    //             id: 16,
    //             name: '销售部',
    //         })
    //         .expect(200, {
    //             code: 0,
    //             data: []
    //         });
    // });

    // it('部门删除', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .delete('/api/department/del')
    //         .send({
    //             id: 18,
    //         })
    //         .expect(200, {
    //             code: 0,
    //             data: []
    //         });
    // });

    // it('获取组织结构', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .get('/api/department/getAll')
    //         .expect(200)
    //         .then(response => {
    //             assert(response.body.data.name, '销售部');
    //         });
    // });

});
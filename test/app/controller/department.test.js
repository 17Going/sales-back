'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/department.test.js', () => {

    //   it('controller 创建公司 或 部门', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //       .post('/api/department/create')
    //       .send({
    //         depName: '销售部',
    //         parentId: 1
    //       })
    //       .expect(200, {
    //         code: 0,
    //         data: []
    //       });
    //   });

    // it('controller 部门删除', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .delete('/api/department/delete')
    //         .send({
    //             id: 2,
    //         })
    //         .expect(200, {
    //             code: 103,
    //             msg: '部门不存在'
    //         });
    // });

    // it('controller 部门更新', () => {
    //     app.mockCsrf();
    //     return app.httpRequest()
    //         .put('/api/department/update')
    //         .send({
    //             id: 3,
    //             depName: '销售部',
    //         })
    //         .expect(200, {
    //             code: 0,
    //             data: []
    //         });
    // });

    it('controller 获取组织结构', () => {
        app.mockCsrf();
        return app.httpRequest()
            .get('/api/department/getAll')
            .expect(200)
            .then(response => {
              console.log(response.body.data);
                assert(response.body.data);
            });
    });

});
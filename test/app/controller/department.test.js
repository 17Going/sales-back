'use strict';

/**
 * 部门单元测试
 * 参考资料：https://github.com/visionmedia/supertest#getting-started
 */

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/department.test.js', () => {

  /**
   * 创建公司
   */
  it('创建公司', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/department/create')
      .send({
        name: '成都四方伟业软件股份有限公司'
      })
      .expect(200, {
        code: 0,
        data: []
      });
  });
  /**
   * 部门创建
   */
  it('部门创建', () => {
    app.mockCsrf();
    return app.httpRequest()
      .post('/api/department/add')
      .send({
        name: '销售部',
        parentId: 1
      })
      .expect(200, {
        code: 0,
        data: []
      });
  });

});
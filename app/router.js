'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', app.oAuth2Server.token());
  // api
  router.get('/doc/department', controller.api.department.index);
  router.get('/doc/user', controller.api.user.index);
  router.get('/doc/auth', controller.api.auth.index);
  
  //部门
  router.post('/api/department/create', controller.department.create);
  router.delete('/api/department/delete', controller.department.delete);
  router.put('/api/department/update', controller.department.update);
  router.get('/api/department/getAll', controller.department.getAll);

  //用户
  router.post('/api/user/create', controller.user.create);
  router.get('/api/user/list', controller.user.list);

  //权限值
  router.post('/api/auth/create', controller.auth.create);
  router.put('/api/auth/update', controller.auth.update);
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', app.oAuth2Server.token());
  router.get('/doc', controller.api.index);
  
  router.post('/api/department/create', controller.department.create);
  router.delete('/api/department/delete', controller.department.delete);
  router.put('/api/department/update', controller.department.update);

  router.get('/api/department/getAll', controller.department.getAll);
};

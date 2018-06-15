'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api', controller.api.index);
  router.post('/api/department/create', controller.department.createCompany);
  router.post('/api/department/add', controller.department.add);
  router.get('/api/department/getAll', controller.department.getAll);
  router.put('/api/department/update', controller.department.update);
  router.delete('/api/department/del', controller.department.del);
};

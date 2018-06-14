'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/login', controller.login.login);
  router.post('/api/department/create', controller.department.createCompany);
  router.post('/api/department/add', controller.department.add);
};

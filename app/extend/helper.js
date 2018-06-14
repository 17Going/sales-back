'use strict';


const errorMap = {
  '9001': {
    code: '9001',
    msg: '系统错误'
  },
  '9002': {
    code: '9002',
    msg: '参数格式不对'
  },
  '10001': {
    code: '10001',
    msg: '新建部门失败，重新新建'
  },
  '10002': {
    code: '10002',
    msg: '父级部门不存在或已被删除'
  },
  '10003': {
    code: '10003',
    msg: '创建公司失败，请重新操作'
  }
}

module.exports = {
  fail(code) {
    return errorMap[code];
  },
  success(data) {
    return {
      code: '0',
      data
    }
  }
};

'use strict';

const {STATUS_DELETE} = require('../config');

module.exports = {
  success(data) {
    return {
      code: '0',
      data
    }
  },

  where(obj) {
    var str = [`status <> ${STATUS_DELETE}`];
    for(let k in obj){
      if(typeof obj[k] == 'string'){
        str.push(`${k} like '%${obj[k]}%'`);
      } else if(Array.isArray(obj[k])){
        str.push( `${k} in (${obj[k]})`);
      } else {
        str.push(`${k} = ${obj[k]}`);
      }
    }

    return str.join(' and ');
  }
};

'use strict';

const {STATUS_DELETE} = require('../config');

module.exports = {
  success(data) {
    return {
      code: '0',
      data
    }
  },

  where(obj, pre) {
    pre = pre || ''; 
    var str = [`${pre}status <> ${STATUS_DELETE}`];
    for(let k in obj){
      if(typeof obj[k] == 'string'){
        str.push(`${pre}${k} like '%${obj[k]}%'`);
      } else if(Array.isArray(obj[k])){
        str.push( `${pre}${k} in (${obj[k]})`);
      } else {
        str.push(`${pre}${k} = ${obj[k]}`);
      }
    }

    return str.join(' and ');
  },

  order(obj, pre) {
    pre = pre || ''; 
    if(!obj){
      return `order by ${pre}id desc`
    } else {
      var str = [];
      for(let p in obj){
        str.push(`${pre}${p} ${obj[p]}`);
      }
      return `order by ${str.join(',')}`;
    }
  }
};

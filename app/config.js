'use strict';

module.exports = {
    now: function(){
        return new Date().getTime();
    },
    //删除状态
    STATUS_DELETE : 1,
    //正常状态
    STATUS_NORMAL : 0,

    DEFAULT_PASSWORD: 'admin@1234'
}
/**
 * 同意错误处理
 */

module.exports = () => {
    return async function error(ctx, next) {
        try {
            await next();
        } catch (err) {
            // 所有的异常都在 app 上触发一个 error 事件，框架会记录一条错误日志
            ctx.app.emit('error', err, ctx);
            const status = err.status || 500;

            if (status == 500) {
                ctx.body = ctx.helper.fail('9001');
            } else if(status == 422){
                ctx.body = ctx.helper.fail('9002');
            }

            ctx.status = 200;
        }
    };
};

module.exports = () => async (ctx, next) => {
    try {
        await next();
    } catch (e) {
        const status = e.status || 500;
        ctx.setError(status, status === 500 && ctx.app.config.env === 'prod' ? '发生了一个内部错误' : e.message);
        ctx.app.logger.error(e);
    }
};

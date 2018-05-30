module.exports = {
    async getHome(ctx, service) {
        await service.index.home(); // 使用service
        ctx.body = 'Hello Kangaroo !';
        // console.log('con ctx', ctx.render);
        // await ctx.render('index', {
        //     title: 'Hello kangaroo !'
        // })
    },
    async getString(ctx) {
        ctx.body = 'kangaroo string';
    }
}
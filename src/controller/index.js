module.exports = {
    
    async getHome(ctx) {

        // await service.index.home(); // 使用service
        // ctx.body = 'Hello Kangaroo !';
        console.log('con ctx', ctx.controller);
        await ctx.render('index', {
            title: 'Hello kangaroo !'
        })
    },
    async getString(ctx) {
        // ctx.body = 'kangaroo string';
        await ctx.render('user', {
            title: 'I am a amazing kangaroo~'
        })
    }
}
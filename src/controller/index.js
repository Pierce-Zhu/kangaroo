const BaseController = require("../core/BaseController");

module.exports = {

    async getHome(ctx, service) {

        // await service.index.home(); // 使用service
        // ctx.body = 'Hello Kangaroo !';
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

// class IndexController extends BaseController {
//     constructor() {}
//     async getHome(ctx, service) {
//         await service.index.home(); // 使用service
//         ctx.body = "Hello Kangaroo !";
//     }

//     async getString(ctx) {
//         await ctx.render("user", {
//             title: "I am a amazing kangaroo~"
//         });
//     }
// }

// module.exports = IndexController

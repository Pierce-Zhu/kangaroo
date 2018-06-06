const BaseController = require("../core/BaseController");
const MysqlQuery = require('../../lib/mysql.js')

module.exports = {

    async getHome(ctx, service) {

        // await service.index.home(); // 使用service
        await ctx.render('index', {
            title: 'Hello kangaroo !'
        })
    },
    async getString(ctx) {
        console.log('ctx.session', ctx.session);
        // await MysqlQuery.insertData(["zhusen", "admin", "2018-06-06"])
        await MysqlQuery.findUserData(name = "zhusen")
            .then((rs) => {
                console.log('rs>>>>>>>>>>>>>>>>', rs);
                ctx.session = {
                    username: rs[0]['name'],
                    id: rs[0]['id']
                }
            }).catch(err => {
                console.log('mysql err', err);
            })
        await ctx.render('user', {
            title: 'kangaroo mysql test',
            userinfo: ctx.session || {},
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

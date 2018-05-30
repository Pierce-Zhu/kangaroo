// const router = require('koa-router')()

// router.prefix('/users')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

// module.exports = router

const getUser = async (ctx, next) => {
  ctx.body = 'this is a users response!';
}

const getUserInfo = async (ctx, next) => {
  ctx.body = 'this is a getUserInfo response';
}

/**
* path放在后面，中间用空格隔开
*/
module.exports = {
  'get /user': getUser,
  'get /getUserInfo': getUserInfo
}

const router = require('koa-router')()

// 修改路由加载路径
const home = async(ctx, next) => {
  await ctx.render('index', {
    title: 'Hello kangaroo !'
  })
}

const getString = async(ctx, next) => {
  ctx.body = 'kangaroo string';
}

module.exports = {
  'get /': home,
  'get /getString': getString,
}


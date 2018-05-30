const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");

const setRouters = require("./src/routerLoader"); // 引入router中间件
const controller = require("./src/controllerLoader").loadController();

// error handler
onerror(app);

// middlewares
app.use(
    bodyparser({
        enableTypes: ["json", "form", "text"]
    })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/src/public"));

app.use(
    views(__dirname + "/src/views", {
        extension: "ejs"
    })
);

// logger
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// controller中间件
Koa.prototype["controller"] = {};
controller.forEach(url => {
    Koa.prototype.controller[url.name] = url.module;
});

// routes
// app.use(index.routes(), index.allowedMethods())
// app.use(users.routes(), users.allowedMethods())
app.use(setRouters(app)); //引入router中间件，传递app实例

// error-handling
app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
});

module.exports = app;

"use strict";

const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const session = require("koa-session-minimal");
const MysqlStore = require("koa-mysql-session"); // mysql

const setRouters = require("../src/routerLoader"); // 引入router中间件
const controller = require("../src/controllerLoader").loadController();
const service = require("../src/controllerLoader").loadService();
const config = require("../config/defaultConfig");

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
const _dirname = __dirname.replace("lib", "");
app.use(require("koa-static")(_dirname + "/src/public"));

app.use(
    views(_dirname + "/src/views", {
        extension: "ejs"
    })
);

// 时间戳
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// controller中间件
Koa.prototype["controller"] = {};
controller.forEach(item => {
    console.log("contorller module", item);
    Koa.prototype.controller[item.name] = item.module;
});

// 引入service中间件
Koa.prototype["service"] = {};
service.forEach(item => {
    Koa.prototype.service[item.name] = item.module;
});

// Mysql中间件
app.use(
    session({
        key: "USER_SID",
        store: new MysqlStore(config.mysqlConfig)
    })
);

// routes
app.use(setRouters(app)); //引入router中间件，传递app实例

app.on("error", (err, ctx) => {
    console.error("server error", err, ctx);
});

module.exports = app;

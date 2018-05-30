const koa = require('koa');
const fs = require('fs');
const koaRoute = require('koa-router');

class KangarooLoader {
    removeString(source) {
        const string = 'core';
        const index = source.indexOf(string);
        const len = string.length;
        return source.substring(0, index - 1);
    }

    loader(url) {
        const dir = fs.readdirSync(url);
        
        return dir.map((filename) => {
            const module = require(url + '/' + filename);
            return { name: filename.split('.')[0], module };
        })
    }

    loadController() {
        const url = this.removeString(__dirname) + '/controller';
        // const url = `${__dirname}/controller`;
        return this.loader(url);
    }

    loadService() {
        const url = this.removeString(__dirname) + '/service';
        // const url = `${__dirname}/service`;
        return this.loader(url);
    }

}

class Kangaroo extends koa {
    constructor(props) {
        super(props);
        this.router = new koaRoute();

        this.loader = new KangarooLoader();
        const controllers = this.loader.loadController();
        this.controller = {};
        controllers.forEach((crl) => {
            this.controller[crl.name] = crl.module;
        })
    }

    setRouters() {
        const _setRouters = (app) => {
            const routers = require('../router')(app);
            const svs = {};
            app.loader.loadService().forEach((service) => {
                svs[service.name] = service.module;
            })
            Object.keys(routers).forEach((key) => {
                const [method, path] = key.split(' ');
                app.router[method](path, (ctx) => {
                    const handler = routers[key];
                    handler(ctx, svs);
                })
            })
            return app.router.routes()
        }
        this.use(_setRouters(this));
    }
}

module.exports = Kangaroo;
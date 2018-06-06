const fs = require('fs');
const Iterator = require('./util/Iterator');

const loader = (url) => {
    const dir = fs.readdirSync(url);

    return dir.map((filename) => {
        const module = require(url + '/' + filename);
        return { name: filename.split('.')[0], module };
    })
}

const loadController = () => {
    const url = `${__dirname}/controller`;
    return loader(url);
    // controllerList = loader(url);
    // controllerMidware = [];
    // controllerList.forEach((item) => {
        // console.log('controllerList item>>>>>', item);
        // Object.getOwnPropertyNames(item.module);
        // const x = new item.module;
        // console.log('Object.getOwnPropertyNames>>>>>', Object.getOwnPropertyNames(Object.getPrototypeOf(x)));
        // });
    // });
}

const loadService = () => {
    const url = `${__dirname}/service`;
    return loader(url);
}


module.exports = {
    loadController,
    loadService,
};
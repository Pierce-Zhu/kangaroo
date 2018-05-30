const fs = require('fs');

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
}

const loadService = () => {
    const url = `${__dirname}/service`;
    return loader(url);
}


module.exports = {
    loadController,
    loadService,
};
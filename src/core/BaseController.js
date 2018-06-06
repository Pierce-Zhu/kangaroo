'use strict';

const App = require('../../index');

class BaseController {

    constructor() {
        const { service } = App;
        this.app = App;
        this.service = service;
    }
    
}

module.exports = BaseController;
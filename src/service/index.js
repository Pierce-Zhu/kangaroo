'use strict';

module.exports = {
    async home(ctx) {
        console.log('this is home service');
    },
    async getString() {
        console.log('string service');
    }
};
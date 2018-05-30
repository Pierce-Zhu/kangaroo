// 更简单的启动方式

const Kangaroo = require('./src/core');
const app = new Kangaroo();
app.setRouters();
app.listen(3001, '127.0.0.1', () => {
    console.log('服务器启动');
})
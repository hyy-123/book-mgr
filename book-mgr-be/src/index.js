const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const cors = require('@koa/cors');

const {connect} = require('./db');
// 引入路由处理逻辑
const registerRoutes = require('./routers');





// 连接数据库是异步的，要在连接数据库成功后再做对应的事情
connect().then(() => {
    app.use(cors());
    app.use(koaBody());
    
    // 把app传递过去，调用路由函数
    registerRoutes(app);




    // 开启一个http服务，接收http请求，并作处理，处理完后响应
    app.listen(3000, () => {
        console.log('启动成功！'); 
    });
});




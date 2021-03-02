const Koa = require('koa');
const app = new Koa();

// 通过app.use注册中间件，中间件本质是一个函数
// context上下文，当前请求的相关信息都在里面

// 开启一个http服务，接收http请求，并作处理，处理完后响应
app.listen(3000, () => {
    console.log('启动成功！'); 
});
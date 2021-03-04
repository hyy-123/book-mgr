// 导入路由
const auth = require("./auth/index");
const inviteCode = require("./invite-code/index");

// 注册路由
// 通过app.use注册中间件，中间件本质是一个函数
// context上下文，当前请求的相关信息都在里面
module.exports = (app) => {
    app.use(auth.routes());
    app.use(inviteCode.routes());
}
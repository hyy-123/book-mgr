const Router = require('@koa/router');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const InviteCode = mongoose.model('InviteCode');

// 创建路由
const router = new Router({
    prefix: '/auth',
});

// 注册逻辑
router.post('/register', async(ctx) => {
    const {
        account,
        password,
        inviteCode,
    } = ctx.request.body;

    if(account === '' || password === '' || inviteCode === '') {
        ctx.body = {
            code: 0,
            msg: '字段不能为空',
            data: null,
        };
        return;
    };

    // 找有没有邀请码
    const findCode = await InviteCode.findOne({
        code: inviteCode,
    }).exec();
    if(!findCode || findCode.user) {
        ctx.body = {
            code: 0,
            msg: '邀请码不正确',
            data: null,
        };
        return;
    };

    // 判断是否已存在
    const findUser = await User.findOne({
        account,
    }).exec();

    if(findUser) {
        ctx.body = {
            code: 0,
            msg: '已存在该用户',
            data: null,
        };
        return;
    };

    // 创建一个用户
    const user = new User({
        account,
        password,
    });

    // 把创建的用户同步到mongodb,_id是用户的唯一标志
    const res = await user.save();
    findCode.user = res._id;
    findCode.meta.updatedAt = new Date().getTime();
    // 将改掉后的findcode保存
    await findCode.save();

    ctx.body = {
        code: 1,
        msg: '注册成功',
        data: res,
    };
});


// 登录逻辑
router.post('/login', async(ctx) => {
    const {
        account,
        password,
    } = ctx.request.body;

    if(account === '' || password === '') {
        ctx.body = {
            code: 0,
            msg: '字段不能为空',
            data: null,
        };
        return;
    };

    const one = await User.findOne({
        account,
    }).exec();

    if(!one) {
        ctx.body = {
            code: 0,
            msg: '用户名或密码错误',
            data: null,
        };
    };

    // 重新构建user，剔除敏感信息password，
    // 登录成功后返回的data中就不会显示passw
    const user = {
        account: one.account,
        _id: one._id,
    };

    if(one.password == password) {
        ctx.body = {
            code: 1,
            msg: '登录成功',
            data: {
                user,
                token: jwt.sign(user, 'book-mgr'),
            },
        };
        return;
    };
    ctx.body = {
        code: 0,
        msg: '密码错误',
        data: null,
    };
});

// 暴露路由
module.exports = router;
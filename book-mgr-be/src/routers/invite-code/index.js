const Router = require('@koa/router');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const InviteCode = mongoose.model('InviteCode');

// 创建路由
const router = new Router({
    prefix: '/invite',
});

router.get('/add', async(ctx) => {
    // 生成一个随机数
    const code = new InviteCode({
        code: uuidv4(),
        user: '',
    });
    const saved = await code.save();
    ctx.body = {
        code: 1,
        data: saved,
        msg: '创建成功',
    }
});

// 暴露路由
module.exports = router;
const mongoose = require('mongoose');
// 导入源信息获取方法
const { getMate } = require('../helpers');

// 创建用户集合的Schema
const InviteCodeSchema = new mongoose.Schema({
    // 邀请码
    code: String,
    // 用来注册哪个账户
    user: String,
    // 源信息
    meta: getMate(),
});

// 注册一个User模型，传递给模型UserSchema
mongoose.model('InviteCode',InviteCodeSchema);
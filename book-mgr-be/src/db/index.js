// 引入
const mongoose = require('mongoose');
// 执行
require('./Schemas/User');
require('./Schemas/InviteCode');

// 连接函数
const connect = () => {
    return new Promise((resolve) => {
        // 连接数据库
        mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

        // 监听数据库开启,做一些事情
        mongoose.connection.on('open', () => {
            console.log('连接数据库成功...'); 
            resolve();
        });
    });
};

// 暴露连接数据库的方法
module.exports = {
    connect,
};
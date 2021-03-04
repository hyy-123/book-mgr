const mongoose = require('mongoose');
// 导入源信息获取方法
const { getMate } = require('../helpers');

// 1.操作的是book-mgr数据库
// 2.哪个集合
// 3.添加什么格式的文档
// Schema 映射了MongDB下的一个集合，并且他的内容就是集合下文档的构成
// Modal 可以理解为使根据Schema生成的一套方法，这套方法用来操作MongoDB下的集合和集合下的文档

// 创建用户集合的Schema
const UserSchema = new mongoose.Schema({
    account: String,
    password: String,
    // 源信息
    meta: getMate(),
});

// 注册一个User模型，传递给模型UserSchema
mongoose.model('User',UserSchema);

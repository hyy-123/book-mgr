// 引入
const mongoose = require('mongoose');

// 1.操作的是book-mgr数据库
// 2.哪个集合
// 3.添加什么格式的文档

// Schema 映射了MongDB下的一个集合，并且他的内容就是集合下文档的构成
// Modal 可以理解为使根据Schema生成的一套方法，这套方法用来操作MongoDB下的集合和集合下的文档

// 创建用户集合的Schema
const UserSchema = new mongoose.Schema({
    Name: String,
    password: String,
    age: Number,
});

// 生成并获取modal
const UserModal = mongoose.model('User',UserSchema);


// 连接函数
const connect = () => {
    // 连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');

    // 监听数据库开启,做一些事情
    mongoose.connection.on('open', () => {
        console.log('连接成功...'); 

        // 创建文档
        // UseModal是一个类（构造函数）,需要new一下
        const User = UserModal({
            Name: '小明',
            password: '123456',
            age: 12,
        });

        // 修改文档内容
        User.age = 99;
        // 这条文档会保存在modal中
        User.save();
    });
};
// 调用函数
connect();
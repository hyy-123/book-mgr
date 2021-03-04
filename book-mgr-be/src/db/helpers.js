const getMate = () => {
    return {
        createdAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
        updatedAt: {
            type: Number,
            default: (new Date()).getTime(),
        },
    };
};
// 导出方法
module.exports = {
    getMate,
};
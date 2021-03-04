import { message } from 'ant-design-vue';

// result方法处理响应的数据
export const result = (response, authShowErrorMsg = true) => {
    const {data} =response;
    if((data.code === 0) && authShowErrorMsg) {
        message.error(data.msg);
    };
    return {
        success(cb) {
            if(data.code !== 0) {
                cb(data, response);
            };
            //引用的时候就可以用链式
            return this;
        },
        fail(cb) {
            if(data.code === 0) {
                cb(data, response);
            };
            return this;
        },
        finally(cb) {
            cb(data, response);
            return this;
        },
    };
};

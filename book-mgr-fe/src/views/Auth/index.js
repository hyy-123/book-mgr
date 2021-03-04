import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';
import { message } from 'ant-design-vue';
import { result } from '@/helpers/utils';

export default defineComponent({
    // 注册组件
    components: {
        UserOutlined,
        LockOutlined,
        MailOutlined,
    },
    setup(){
        // 注册逻辑
        // 通过reactive创建响应式的数据.相比于ref可以传多个值
        const regForm = reactive({
            account: '',
            password: '',
            inviteCode: '',
        });
        const register = async() => {
            if(regForm.account == '') {
                message.info('请输入账户');
                return;
            };
            if(regForm.password == '') {
                message.info('请输入密码');
                return;
            };
            if(regForm.inviteCode == '') {
                message.info('请输入邀请码');
                return;
            };
            const res = await auth.register(
                regForm.account, regForm.password, regForm.inviteCode
            ); 
            result(res)
                .success((data) => {
                    message.success(data.msg);
                });

        };

        // 登录逻辑
        const loginForm = reactive({
            account: '',
            password: '',
        });
        const login = async() => {
           const res = await auth.login(loginForm.account, loginForm.password);
           result(res)
            .success((data) => {
                message.success(data.msg);
            });
        };

        return {
            // 注册相关的数据
            regForm,
            register,
            // 登录相关的数据
            login,
            loginForm,
        }
    },
});
<template>
    <div class="auth">
        <div class="bg">
            <div class="title-info">
                <img class="logo" src="../../assets/logo.jpeg">
                <h2 class="title">图书管理系统后台</h2>
            </div>
            <div class="form">
                <a-tabs>
                    <a-tab-pane key="1" tab="登录">
                        <div class="item">
                            <a-input 
                                placeholder="账户"
                                v-model:value="loginForm.account"
                            >
                                <template #prefix>
                                    <UserOutlined />
                                </template>
                            </a-input>
                        </div>
                        <div class="item">
                            <a-input 
                                placeholder="密码"
                                v-model:value="loginForm.password"
                            >
                                <template #prefix>
                                    <LockOutlined />
                                </template>
                            </a-input>
                        </div>  
                        <div class="item">
                            <a href="">忘记密码？</a>
                        </div>  
                        <div class="item">
                            <a-button 
                                type="primary"
                                @click="login"
                            >
                                登录
                            </a-button>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="注册">
                        <div class="item">
                            <a-input 
                                placeholder="账户" v-model:value="regForm.account"
                            >
                                <template #prefix>
                                    <UserOutlined />
                                </template>
                            </a-input>
                        </div>
                        <div class="item">
                            <a-input 
                                placeholder="密码"
                                v-model:value="regForm.password"
                            >
                                <template #prefix>
                                    <LockOutlined />
                                </template>
                            </a-input>
                        </div>  
                        <div class="item">
                            <a-input 
                                placeholder="邀请码"
                                v-model:value="regForm.inviteCode"
                            >
                                <template #prefix>
                                    <MailOutlined />
                                </template>
                            </a-input>
                        </div>  
                        <div class="item">
                            <a-button 
                                type="primary"
                                @click="register"
                            >
                                注册
                            </a-button>
                        </div>
                    </a-tab-pane>
                </a-tabs> 
            </div>
        </div>    
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scpoed>
    @import './index.scss';
</style>

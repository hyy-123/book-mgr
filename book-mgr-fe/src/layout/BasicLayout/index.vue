<template>
    <div class="basic-layout">
        <div class="header">
            <div class="left">
                <img src="../../assets/logo.jpeg" alt="图书管理系统">
                <div class="title">图书管理系统</div>
            </div>
            <div class="right">
                <div class="msg">
                    你好，xx！
                </div>
                <div class="logout">退出</div>
            </div>
        </div>
        <div style="height:64px"></div>
        <div class="content">
            <div class="left">
                <app-nav />
            </div>
            <div class="right">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" scoped>
    @import './index.scss';
</style>

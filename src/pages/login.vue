<template>
    <div class="login">
        <div class="container">
            <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
        </div>
        <div class="wrapper">
            <div class="container">
                <div class="login-form">
                    <h3>
                        <span class="checked">账号登陆</span>
                        <span class="sep-line">|</span>
                        <span>扫码登陆</span>
                    </h3>
                    <div class="input">
                        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username">
                    </div>
                    <div class="input">
                        <input type="password" placeholder="密码" v-model="password">
                    </div>
                    <div class="btn-box">
                        <a href="javascript:;" class="btn" @click="login()">登录</a>
                    </div>
                    <div class="tips">
                        <div class="sms" @click="register">手机短信登录/注册</div>
                        <div class="reg">
                            <a href="javascript:;"><span>立即注册</span></a>
                            <span>|</span>
                            <a href="javascript:;"><span>忘记密码？</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="footer-link">
                <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
                <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
                <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
                <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
            </div>
            <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            userId: '',
        }
    },
    methods: {
        login() {
            console.log(this.username, this.password)
            let {username, password} = this;
            this.axios.post('/user/login', {
                username,
                password
            }).then((res) => {
                this.$cookie.set('userId', res.id, {expires: '1M'})
                // TO-DO 保存用户名
                this.$store.dispatch('saveUserName', res.username)
                // this.saveUserName(res.username)
                this.$router.push('/index')
            })
        },
        // ...mapActions([saveUserName])
        register() {
            this.axios.post('/user/register', {
                username: 'admin4399',
                password: 'admin4399',
                email: 'admin4399@qq.com'
            }).then(() => {
                this.$message.success('注册成功')
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import './../assets/scss/config.scss';
.login {
    &>.container {
        img {
            width: auto;
            height: 100%;
        }
    }
    .wrapper {
        background: url('/imgs/login-bg.jpg') no-repeat center;
        .container {
            position: relative;
            height: 576px;
            .login-form {
                box-sizing: border-box;
                padding: 0 31px;
                width: 410px;
                height: 410px;
                background-color: #fff;
                position: absolute;
                bottom: 65px;
                right: 0;
                h3 {
                    line-height: 23px;
                    font-size: 24px;
                    text-align: center;
                    margin: 40px auto 49px;
                    .checked {
                        color: $colorA;
                    }
                    .sep-line {
                        margin: 0 32px;
                    }
                }
                .input {
                    display: inline-block;
                    width: 348px;
                    height: 50px;
                    border: 1px solid $colorH;
                    margin-bottom: 20px;
                    input {
                        width: 100%;
                        height: 100%;
                        border: none;
                        padding-left: 18px;
                    }
                }
                .btn {
                    width: 100%;
                    line-height: 50px;
                    margin-top: 10px;
                    font-size: 16px;
                }
                .tips {
                    margin-top: 14px;
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    cursor: pointer;
                    .sms {
                        color: $colorA;
                    }
                    .reg {
                        color: $colorD;
                        span {
                            margin-right: 7px;
                            &:last-child {
                                margin: 0;
                            }
                            &:hover {
                                color: $colorA;
                            }
                        }
                    }
                }
            }
        }
    }
    .footer {
        height: 100px;
        padding-top: 60px;
        color: $colorD;
        font-size: 16px;
        text-align: center;
        .footer-link {
            a {
                color: $colorD;
                display: inline-block;
                &:hover {
                    color: $colorA;
                }
            }
            span {
                margin: 0 10px;
            }
        }
        .copyright {
            margin-top: 13px;
        }
    }
}

</style>
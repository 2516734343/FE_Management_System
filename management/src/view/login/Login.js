import React, { Component } from 'react'
import './Login.css'
import { Input, Button, Modal, message } from 'antd'
import { observable, computed, action } from "mobx";
import { observer, inject } from "mobx-react";
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import RegisterModal from './Register';
import {login} from '../../remote/login';
@inject('loginStore')
@observer class LoginPage extends Component {
    state = {
        username: '',
        password: '',
    }

    @action.bound
    registerClick = () => {
        this.props.loginStore.registerClick(true);
    }
    usernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    passwordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    async login() {
        if (!this.state.password || !this.state.username) {
            message.error('用户名或密码不能为空');
            return;
        }
        try {
            const params = {
                username: this.state.username,
                password: this.state.password
            }
            const respData = await login(params);
            if (respData.status === 1) {
                message.error('用户名或密码不正确');
                return;
            }
            window.localStorage.setItem('key',respData.authentication); // 将tocken存入到local storage
            message.success('登录成功');
            this.props.history.push('/homePage/welcome'); // 登陆成功后跳转到首页
        } catch(e) {
        }
    }
    render() {
        const { registerVisible, registerClick } = this.props.loginStore;
        return (
            <div className="loginPage">
                <div className="loginbox">
                    <h2>实习管理系统</h2>
                    <div className="login-box">
                        <div className="login-title">登录</div>
                        <div style={{ marginTop: '20px' }}>
                            <div style={{ borderBottom: '1px solid #f0f0f0' }}>
                                <UserOutlined />
                                <Input placeholder="请输入账号"
                                    className="input"
                                    value={this.state.username}
                                    onChange={this.usernameChange}
                                />
                            </div>
                            <div style={{ marginTop: '20px', borderBottom: '1px solid #f0f0f0' }}>
                                <LockOutlined />
                                <Input placeholder="请输入密码"
                                    className="input"
                                    value={this.state.password}
                                    onChange={this.passwordChange}
                                />
                            </div>
                            <div style={{ textAlign: 'right', color: '#808080', fontSize: '12px' }}>没有账号?
                            <Button type="link"
                                    onClick={this.registerClick}
                                    style={{ padding: '0px', fontSize: '12px', textDecoration: 'underline' }}>
                                    去注册
                            </Button>
                            </div>
                        </div>
                        <div className="login-btn">
                            <Button type="primary"
                                style={{ width: '75%' }}
                                onClick={() => this.login()}>
                                登陆
                            </Button>
                        </div>
                    </div>
                </div>
                <RegisterModal />
            </div>
        )
    }
}

export default LoginPage

import React, { Component } from 'react'
import { Modal, Input, Radio, message } from 'antd'
import { observer, inject } from "mobx-react";
import { register } from '../../remote/register';
import './Register.css';
@inject('loginStore')
@observer class RegisterModal extends Component {
    state = {
        userType: 1,
        username: '',
        passWord: '',
        tel: '',
        name: '',
        sex: 0,
    }
    cancel = () => {
        this.props.loginStore.registerClick(false);
    }
    handleRegister = () => {
        this.register();
        this.props.loginStore.registerClick(false);
        this.resetForm();
        message.success('注册成功');
    }
    validate() {
        if (this.state.username === '') {
            return {
                code: 0,
                error: '请输入用户名'
            }
        }
        if (this.state.name === '') {
            return {
                code: 0,
                error: '请输入昵称'
            }
        }
        if (this.state.passWord === '') {
            return {
                code: 0,
                error: '请输入密码'
            }
        }
        if (this.state.tel === '') {
            return {
                code: 0,
                error: '请输入联系方式'
            }
        } else {
            return {
                code: 1,
                error: ''
            }
        }
    }
    async register() {
        const val = this.validate();
        if (val.code === 0) {
            message.error(val.error);
            return;
        }
        try {
            const params = {
                username: this.state.username, //"jiangliang",
                password: this.state.passWord, //"123456",
                type: this.state.userType,//用户类型：1：学生，2：老师
                name: this.state.name,// "姜良" ,//昵称
                phone: this.state.tel, //13178906573, //联系方式
                sex: this.state.sex
            }
            await register(params);
        } catch (e) {

        } finally {
        }
    }
    onHandleUserTypeChange = (e) => {
        this.setState({
            userType: e.target.value
        })
    }
    handlenameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    hanldeUserNameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    handleTelChange = (e) => {
        this.setState({
            tel: e.target.value
        })
    }
    handlePassWord = (e) => {
        this.setState({
            passWord: e.target.value
        })
    }
    onHandleSexChange = (e) => {
        this.setState({
            sex: e.target.value
        })
    }
    resetForm = () => {
        this.setState({
            username: '',
            name: '',
            userType: 1,
            tel: '',
            passWord: '',
            sex: 0,
        })
    }
    render() {
        return (
            <Modal visible={this.props.loginStore.registerVisible}
                title={'注册'}
                onCancel={this.cancel}
                cancelText='取消'
                okText='注册'
                onOk={() => this.handleRegister()}>
                <div className="register">
                    <div className="item">
                        <span className="label">用户类型<span className="required">*</span></span>
                        <Radio.Group onChange={this.onHandleUserTypeChange} value={this.state.userType} className="input">
                            <Radio value={1}>学生</Radio>
                            <Radio value={2}>老师</Radio>
                        </Radio.Group>
                    </div>
                    <div className="item">
                        <span className="label">账号<span className="required">*</span></span>
                        <Input placeholder='请输入' className="input"
                            value={this.state.username}
                            onChange={this.hanldeUserNameChange} />
                    </div>
                    <div className="item">
                        <span className="label">昵称<span className="required">*</span></span>
                        <Input placeholder='请输入' className="input"
                            value={this.state.name}
                            onChange={this.handlenameChange} />
                    </div>
                    <div className="item">
                        <span className="label">联系方式<span className="required">*</span></span>
                        <Input placeholder='请输入' className="input"
                            value={this.state.tel}
                            onChange={this.handleTelChange} />
                    </div>
                    <div className="item">
                        <span className="label">密码<span className="required">*</span></span>
                        <Input.Password placeholder='请输入' className="input"
                            value={this.state.passWord}
                            onChange={this.handlePassWord} />
                    </div>
                    <div className="item">
                        <span className="label">性别<span className="required">*</span></span>
                        <Radio.Group onChange={this.onHandleSexChange} value={this.state.sex} className="input">
                            <Radio value={0}>男</Radio>
                            <Radio value={1}>女</Radio>
                        </Radio.Group>
                    </div>
                </div>
            </Modal>
        )
    }
}

export default RegisterModal

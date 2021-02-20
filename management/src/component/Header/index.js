import React, { Component } from 'react'
import "./index.css"
import {Avatar} from "antd";

export default class Header extends Component {
    render() {
        return (
            <div className="header-content">
                <div className="left">
                    <h1>实习管理系统</h1>
                </div>
                <div className="right">
                    <Avatar size={32}>用户名</Avatar>
                    <span style={{marginLeft: '6px'}}>用户名</span>
                    <button style={{ marginLeft: '15px' }}>退出</button>
                </div>
            </div>
        )
    }
}

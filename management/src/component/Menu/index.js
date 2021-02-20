import React, { Component } from 'react'
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    DesktopOutlined,
    ContainerOutlined,
    ApartmentOutlined,
    FolderOutlined,
    SnippetsOutlined,
    FileDoneOutlined,
    FileTextOutlined,
    ProfileOutlined,
    SolutionOutlined,
    ScheduleOutlined
} from '@ant-design/icons';
import routeConfig from '../../view/RouteConfig';
const { SubMenu } = Menu;

const { root, userManagement, studentInfo,
    departmentManagement, studyManagement, classManagement,
    fileTableManagement, teacherManagement, teacherClassManagement, taskReocrd, socreRecord,
    downLoad, practiseTable, sendTask, sendTaskRecord, scoreComment,
    scoreRecord, personalInfo,viewTask, practiseTaskEdit, practiseTaskEditRecord } = routeConfig.homePage
export default class MenuBar extends Component {
    state = {
        collapsed: false,
        current: '1',
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            current: '1',
        });
    };
    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div style={{ width: 256 }}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
                <Menu
                    defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        {/* <a href="/homePage/userManagement">用户管理</a> */}
                        <Link to={userManagement}>用户管理</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<SolutionOutlined />} >
                        <Link to={studentInfo}>学生信息</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<ApartmentOutlined />} title="学校组织管理">
                        <Menu.Item key="5"><Link to={departmentManagement}>学院管理</Link></Menu.Item>
                        <Menu.Item key="6"><Link to={studyManagement}>专业管理</Link></Menu.Item>
                        <Menu.Item key="7"><Link to={classManagement}>班级管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="老师信息管理">
                        <Menu.Item key="9"><Link to={teacherManagement}>老师管理</Link></Menu.Item>
                        <Menu.Item key="10"><Link to={teacherClassManagement}>老师班级管理</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="11" icon={<FolderOutlined />}>
                        <Link to={fileTableManagement}>文档表管理</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<SnippetsOutlined />}>
                        <Link to={taskReocrd}>老师发布任务记录</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<FileDoneOutlined />}>
                        <Link to={socreRecord}>学生成绩评定记录</Link>
                    </Menu.Item>
                    <Menu.Item key="13" icon={<FileTextOutlined />}>
                        <Link to={practiseTable}>批阅实习表</Link>
                    </Menu.Item>
                    <SubMenu key="sub3" icon={<ProfileOutlined />} title="发布任务管理">
                        <Menu.Item key="14"><Link to={sendTask}>发布任务</Link></Menu.Item>
                        <Menu.Item key="15"><Link to={sendTaskRecord}>老师发布任务记录</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<ScheduleOutlined />} title="成绩评定管理">
                        <Menu.Item key="16"><Link to={scoreComment}>成绩评定</Link></Menu.Item>
                        <Menu.Item key="17"><Link to={scoreRecord}>成绩评定记录</Link></Menu.Item>
                    </SubMenu>
                    {/* <Menu.Item key="18" icon={<ProfileOutlined />}>
                        <Link to={sendTaskRecord}>老师发布任务记录</Link>
                    </Menu.Item> */}
                    <Menu.Item key="12" icon={<ContainerOutlined />}>
                        <Link to={downLoad}>批阅查看及下载</Link>
                    </Menu.Item>
                    <Menu.Item key="19" icon={<SolutionOutlined />} >
                        <Link to={personalInfo}>个人信息</Link>
                    </Menu.Item>
                    <SubMenu key="sub5" icon={<ApartmentOutlined />} title="学生实习管理">
                        <Menu.Item key="20"><Link to={viewTask}>查看老师发布任务</Link></Menu.Item>
                        <Menu.Item key="21"><Link to={practiseTaskEdit}>实习表填写</Link></Menu.Item>
                        <Menu.Item key="22"><Link to={practiseTaskEditRecord}>实习表填写记录</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }

}

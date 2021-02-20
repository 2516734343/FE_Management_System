import React, { Component } from 'react';
import { Route } from "react-router-dom"
import Layout from '../component/Layout/index';
import Header from '../component/Header/index';
import MenuBar from '../component/Menu/index';
import Welcome from './Welcome';
import UserManagement from './userMenagement/UserMenagement';
import StudentInfo from './studentInfo/StudentInfo';
import DepartmentMana from './schoolManagement/DepartmentMana';
import StudyMana from './schoolManagement/StudyMana';
import ClassMana from './schoolManagement/ClassMana';
import FileTableManagement from './fileTableManagement/FileTableManagement';
import TeacherInfoManagement from './teacherInfoManagement/TeacherInfoManagement';
import TeacherClassMaga from './teacherInfoManagement/TeacherClass';
import TaskRecord from './taskRecord/TaskRecord';
import SecoreRecord from './scoreRecord/SecoreRecord';
import ViewDownload from './viewDownload/ViewDownload';
import PractiseTable from './commentPractiseTable/CommentPractiseTable';
import SendTask from './taskManagement/SendTask';
import SendTaskRecord from './taskManagement/SendTaskRecord';
import ScoreComment from './scoreCommentMaga/ScoreComment';
import ScoreCommentRecord from './scoreCommentMaga/ScoreCommentRecord';
import  PersonalInfo from './persinalInfo/PersonalInfo';
import ViewTask from './practiseManagement/ViewTask';
import TableEdit from './practiseManagement/TableEdit';
import TableEditRecord from './practiseManagement/TableEditRecord';
import routeConfig from './RouteConfig';
const { root, userManagement, studentInfo, welcome, departmentManagement, studyManagement,
    classManagement, fileTableManagement, teacherManagement, teacherClassManagement,
    taskReocrd, socreRecord, downLoad,practiseTable,sendTask,sendTaskRecord,scoreComment,scoreRecord,
    personalInfo,viewTask,practiseTaskEdit,practiseTaskEditRecord } = routeConfig.homePage
export default class Admin extends Component {
    render() {
        return (
            <Layout
                header={<Header />}
                aside={<MenuBar />}
            >
                <Route path={welcome} exact component={Welcome} />
                <Route path={userManagement} exact component={UserManagement} />
                <Route path={studentInfo} exact component={StudentInfo} />
                <Route path={departmentManagement} exact component={DepartmentMana} />
                <Route path={studyManagement} exact component={StudyMana} />
                <Route path={classManagement} exact component={ClassMana} />
                <Route path={teacherManagement} exact component={TeacherInfoManagement} />
                <Route path={teacherClassManagement} exact component={TeacherClassMaga} />
                <Route path={fileTableManagement} exact component={FileTableManagement} />
                <Route path={taskReocrd} exact component={TaskRecord} />
                <Route path={socreRecord} exact component={SecoreRecord} />
                <Route path={downLoad} exact component={ViewDownload} />
                <Route path={practiseTable} exact component={PractiseTable} />
                <Route path={sendTask} exact component={SendTask} />
                <Route path={sendTaskRecord} exact component={SecoreRecord} />
                <Route path={scoreComment} exact component={ScoreComment} />
                <Route path={scoreRecord} exact component={ScoreCommentRecord} />
                <Route path={personalInfo} exact component={PersonalInfo} />
                <Route path={viewTask} exact component={ViewTask} />
                <Route path={practiseTaskEdit} exact component={TableEdit} />
                <Route path={practiseTaskEditRecord} exact component={TableEditRecord} />
            </Layout>
        )
    }
}

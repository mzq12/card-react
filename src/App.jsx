import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

// 路由组件
const Home = lazy(() => import('./container/overview.jsx'));
// 教务管理
const DepartCharge = lazy(() => import('./container/educational/departcharge.jsx'));
const ParentsCharge = lazy(() => import('./container/educational/parentscharge.jsx'));
const StudentCharge = lazy(() => import('./container/educational/studentscharge.jsx'));
const CourseCharge = lazy(() => import('./container/educational/coursecharge.jsx'));
const TeacherCharge = lazy(() => import('./container/educational/teachercharge.jsx'));
const ClassesCharge = lazy(() => import('./container/educational/classescharge.jsx'));
// 教学管理
const ClassAssignment = lazy(() => import('./container/instructional/classassignment.jsx'));
const StudentLeave = lazy(() => import('./container/instructional/studentleave.jsx'));
const StudentAttendance = lazy(() => import('./container/instructional/studentattendance.jsx'));
// 安全管理
const Safetynotice = lazy(() => import('./container/safety/safetyNotice.jsx'));
const ChargeCard = lazy(() => import('./container/safety/chargCard.jsx'));
// 教师办公
const Announcement = lazy(() => import('./container/teacherOffice/announcement.jsx'));
class App extends Component {
	state = {
		BreadcrumbLen: []
	};

	onMenuItemClick = (item) => {
		this.handleBreadcrumb(item.keyPath);
	};
	handleBreadcrumb = (breadcrumbs) => {
		let isArray = breadcrumbs instanceof Array;
		if (!isArray) {
			return null;
		}
		this.setState({ Breadcrumb: breadcrumbs });
	};
	componentDidMount() {
		this.checkLogin();
	}

	componentWillUpdate(nextProps) {
		this.checkLogin();
	}

	checkLogin = () => {
		const token = Cookies.get('token');
		if (!token) {
			this.props.history.push('/login');
		}
	};

	render() {
		return (
			<Layout
				style={{
					minHeight: '100vh'
				}}
			>
				<Sider className="dcc-side">
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline" onClick={this.onMenuItemClick}>
						<Menu.Item key="概览">
							<Icon type="pie-chart" />
							<Link to="/">概览</Link>
						</Menu.Item>
						<SubMenu
							key="预约管理"
							title={
								<span>
									<Icon type="form" /> <span> 教务管理 </span>
								</span>
							}
						>
							<Menu.Item key="部门管理">
								<Link to="/departcharge">部门管理</Link>
							</Menu.Item>
							<Menu.Item key="家长管理">
								<Link to="/parentscharge">家长管理</Link>
							</Menu.Item>
							<Menu.Item key="学生管理">
								<Link to="/studentscharge">学生管理</Link>
							</Menu.Item>
							<Menu.Item key="课程管理">
								<Link to="/coursecharge">课程管理</Link>
							</Menu.Item>
							<Menu.Item key="老师管理">
								<Link to="/teachercharge">老师管理</Link>
							</Menu.Item>
							<Menu.Item key="班级管理">
								<Link to="/classescharge">班级管理</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="教学管理"
							title={
								<span>
									<Icon type="user" /> <span> 教学管理 </span>
								</span>
							}
						>
							<Menu.Item key="班级作业">
								<Link to="/classassignment">班级作业</Link>
							</Menu.Item>
							<Menu.Item key="学生请假">
								<Link to="/studentleave">学生请假</Link>
							</Menu.Item>
							<Menu.Item key="学生考勤">
								<Link to="/studentattendance">学生考勤</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="安全管理"
							title={
								<span>
									<Icon type="user" /> <span> 安全管理 </span>
								</span>
							}
						>
							<Menu.Item key="校园卡管理">
								<Link to="/chargeCard">校园卡管理</Link>
							</Menu.Item>
							<Menu.Item key="学生请假">
								<Link to="/studentleave">安全区域</Link>
							</Menu.Item>
							<Menu.Item key="学生考勤">
								<Link to="/safetynotice">安全通知</Link>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="教师办公"
							title={
								<span>
									<Icon type="user" /> <span> 教师办公 </span>
								</span>
							}
						>
							<Menu.Item key="公告通知">
								<Link to="/announcement">公告通知</Link>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Layout>
					<Header
						style={{
							background: '#2A86F8',
							padding: 0
						}}
					/>
					<Content
						style={{
							margin: '0 16px'
						}}
					>
						<Breadcrumb
							style={{
								margin: '16px 0'
							}}
						/>
						<div
							style={{
								padding: 24,
								background: '#fff',
								minHeight: 360
							}}
						>
							<Suspense fallback={<div>Loading...</div>}>
								<Switch>
									<Route exact path="/" component={() => <Home />} />
									<Route exact path="/departcharge" component={() => <DepartCharge />} />
									<Route path="/parentscharge" component={() => <ParentsCharge />} />
									<Route path="/studentscharge" component={() => <StudentCharge />} />
									<Route path="/coursecharge" component={() => <CourseCharge />} />
									<Route path="/teachercharge" component={() => <TeacherCharge />} />
									<Route path="/classescharge" component={() => <ClassesCharge />} />
									<Route path="/classassignment" component={() => <ClassAssignment />} />
									<Route path="/studentleave" component={() => <StudentLeave />} />
									<Route path="/studentattendance" component={() => <StudentAttendance />} />
									<Route path="/announcement" component={() => <Announcement />} />
									<Route path="/safetynotice" component={() => <Safetynotice />} />
									<Route path="/chargeCard" component={() => <ChargeCard />} />
								</Switch>
							</Suspense>
						</div>
					</Content>
					<Footer
						style={{
							textAlign: 'center'
						}}
					>
						蓝涟科技
					</Footer>
				</Layout>
			</Layout>
		);
	}
}

export default App;

import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import OverviewStyle from '../static/scss/overview.scss';
import http from '../config/axios.config';
import OnSchoolSituation from '../components/onSchoolSituation';
import StudentStatistic from '../components/studetnStatistic';
import TeacherStatistic from '../components/teacherStatistic.jsx';
class Overview extends Component {
	constructor(props) {
		super(props);
		this.state = {
			trackNum: 0
		};
	}
	componentDidMount() {
		http.get('/aj/dashboard/fetchtracknum').then((res) => {
			console.log(res);
		});
	}
	componentWillUnmount() {
		clearInterval();
	}
	render() {
		return (
			<div>
				<Row>
					<Col span={8}>
						<div className={OverviewStyle.license_banner}>
							<Card title="教师总数" bordered={false}>
								<p>总数(人)</p>
								<h6>2035</h6>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<div className={OverviewStyle.track_banner}>
							<Card title="学生总数" bordered={false}>
								<p>总数(人)</p>
								<h6>19224</h6>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<div className={OverviewStyle.online_banner}>
							<Card title="学生到校比例" bordered={false}>
								<p>单位(%)</p>
								<h6>85</h6>
							</Card>
						</div>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<OnSchoolSituation />
						<StudentStatistic />
						<TeacherStatistic />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Overview;

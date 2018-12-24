import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import OverviewStyle from '../static/scss/overview.scss';
import http from '../config/axios.config';
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
							<Card title="电动车上牌数" bordered={false}>
								<p>总数(辆)</p>
								<h6>2035</h6>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<div className={OverviewStyle.track_banner}>
							<Card title="电动车轨迹" bordered={false}>
								<p>总数(条)</p>
								<h6>19224309</h6>
							</Card>
						</div>
					</Col>
					<Col span={8}>
						<div className={OverviewStyle.online_banner}>
							<Card title="电动车在线率" bordered={false}>
								<p>单位(%)</p>
								<h6>85</h6>
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Overview;

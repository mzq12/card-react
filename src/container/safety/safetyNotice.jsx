import React, { Component } from 'react';
import { Form, Input, Button, Table } from 'antd';
const FormItem = Form.Item;
class safetyNotice extends Component {
	state = {
		columns: [
			{ title: '班级', dataIndex: 'class', key: 'class' },
			{ title: '学号', dataIndex: 'id', key: 'id' },
			{ title: '越界时间', dataIndex: 'overtime', key: 'overtime' },
			{ title: '越界坐标', dataIndex: 'coordinate', key: 'coordinate' }
		],
		data: [
			{
				key: '1',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			},
			{
				key: '2',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			},
			{
				key: '3',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			},
			{
				key: '4',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			},
			{
				key: '5',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			},
			{
				key: '6',
				class: '初一八班',
				id: 3454524,
				overtime: '2018-12-25 19:09',
				coordinate: '129.4654165, 39.16816516'
			}
		]
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancel = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		return (
			<div>
				<Form layout="inline">
					<FormItem label="姓名">
						<Input />
					</FormItem>
					<FormItem label="学号">
						<Input />
					</FormItem>
					<FormItem label="设备号">
						<Input />
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} />
			</div>
		);
	}
}

export default safetyNotice;

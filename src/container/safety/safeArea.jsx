import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Row, Col, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class chargeCard extends Component {
	state = {
		columns: [
			{ title: '班级', dataIndex: 'class', key: 'class' },
			{ title: '学号', dataIndex: 'id', key: 'id' },
			{ title: '姓名', dataIndex: 'name', key: 'name' },
			{
				title: '操作',
				dataIndex: 'operation',
				key: 'operation',
				render: () => (
					<span>
						<a>位置追踪</a>
						<Divider type="vertical" />
						<a>历史轨迹</a>
					</span>
				)
			}
		],
		data: [
			{
				key: '1',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
			},
			{
				key: '2',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
			},
			{
				key: '3',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
			},
			{
				key: '4',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
			},
			{
				key: '5',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
			},
			{
				key: '6',
				class: '初一八班',
				id: 3454524,
				name: 'kkoma'
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
		return <div>添加安全区域</div>;
	}
}

export default chargeCard;

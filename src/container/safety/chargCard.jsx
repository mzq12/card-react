import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Row, Col, Select, Modal } from 'antd';
import History from '../../components/historyTrack.jsx';
import { truncate } from 'fs';
const FormItem = Form.Item;
const Option = Select.Option;
class chargeCard extends Component {
	state = {
		visible: false,
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
						<a onClick={this.showModal}>历史轨迹</a>
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
		return (
			<div>
				<Form layout="inline">
					<Row>
						<Col span={24}>
							<FormItem label="年级">
								<Select placeholder="选择年级" style={{ width: 200 }}>
									<Option value="12">2017-2018</Option>
									<Option value="13">2018-2019</Option>
									<Option value="14">2019-2020</Option>
								</Select>
							</FormItem>
							<FormItem label="班级">
								<Select placeholder="选择班级" style={{ width: 200 }}>
									<Option value="12">1</Option>
									<Option value="13">2</Option>
									<Option value="14">3</Option>
								</Select>
							</FormItem>
							<FormItem label="学号">
								<Input />
							</FormItem>
							<FormItem label="姓名">
								<Input />
							</FormItem>
						</Col>
					</Row>

					<Row>
						<Col span={24}>
							<FormItem label="卡号">
								<Input />
							</FormItem>
							<FormItem>
								<Button type="primary">搜索</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					visible={this.state.visible}
					bodyStyle={{ width: 1000, height: 700 }}
					width={1000}
					onCancel={this.handleCancel}
					destroyOnClose
				>
					<History />
				</Modal>
			</div>
		);
	}
}

export default chargeCard;

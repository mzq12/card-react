import React, { Component } from 'react';
import { Form, Input, Button, Table, Modal, DatePicker } from 'antd';
const FormItem = Form.Item;

class Detail extends Component {
	render() {
		return (
			<div>
				<Form>
					<FormItem label="选择时间">
						<DatePicker />
					</FormItem>
				</Form>
				<p>麦克斯</p>
				<p>2018/12/25</p>
				<p>上学时间: 08:00</p>
				<p>放学时间: 18:00</p>
			</div>
		);
	}
}
class studentAttendance extends Component {
	state = {
		visible: false,
		columns: [
			{ title: '班级', dataIndex: 'class', key: 'class' },
			{
				title: '学号',
				dataIndex: 'studentID',
				key: 'studentID',
				render: (text, record) => (
					<span>
						<a onClick={this.showModal}>{text}</a>
					</span>
				)
			},
			{ title: '考勤总数', dataIndex: 'totalNum', key: 'totalNum' },
			{ title: '到课次数', dataIndex: 'toClassNum', key: 'toClassNum' },
			{ title: '旷课次数', dataIndex: 'skipClassNum', key: 'skipClassNum' },
			{ title: '缺勤次数', dataIndex: 'absenClassNum', key: 'absenClassNum' },
			{ title: '请假次数', dataIndex: 'leaveNum', key: 'leaveNum' },
			{ title: '迟到次数', dataIndex: 'lateNum', key: 'lateNum' }
		],
		data: [
			{
				key: '1',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
			},
			{
				key: '2',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
			},
			{
				key: '3',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
			},
			{
				key: '4',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
			},
			{
				key: '5',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
			},
			{
				key: '6',
				class: '初一8班',
				studentID: 1234123412,
				totalNum: 12,
				toClassNum: 45,
				skipClassNum: 23,
				absenClassNum: 12,
				leaveNum: 1,
				lateNum: 67
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
					<FormItem label="班级">
						<Input />
					</FormItem>
					<FormItem label="开始时间">
						<DatePicker />
					</FormItem>
					<FormItem label="结束时间">
						<DatePicker />
					</FormItem>
					<FormItem label="学号">
						<Input />
					</FormItem>
					<FormItem label="学号">
						<Button type="primary">搜索</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal onCancel={this.handleCancel} visible={this.state.visible}>
					<Detail />
				</Modal>
			</div>
		);
	}
}

export default studentAttendance;

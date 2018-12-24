import React, { Component } from 'react';
import {
	Form,
	Input,
	Button,
	Table,
	Divider,
	Modal,
	Popconfirm,
	Select,
	Row,
	Col,
	DatePicker,
	Collapse,
	Checkbox
} from 'antd';
import PicturesWall from '../../components/picturesWall';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const Panel = Collapse.Panel;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
// 操作表单
class OperateForm extends Component {
	state = {
		visible: false
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancle = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<Form layout="inline">
					<Row>
						<Col span={4}>
							<FormItem label="请假类型">
								{getFieldDecorator('class', { initialValue: '请选择' })(
									<Select>
										<Option value="1">病假</Option>
										<Option value="2">事假</Option>
									</Select>
								)}
							</FormItem>
						</Col>
						<Col span={4}>
							<FormItem label="状态">
								{getFieldDecorator('course', { initialValue: '请选择' })(
									<Select>
										<Option value="1">申请中</Option>
										<Option value="2">已审批</Option>
										<Option value="3">已拒批</Option>
										<Option value="4">已销假</Option>
									</Select>
								)}
							</FormItem>
						</Col>
						<Col span={5}>
							<FormItem label="学号">
								<Input />
							</FormItem>
						</Col>
						<Col span={5}>
							<FormItem label="班级">
								<Input />
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={6}>
							<FormItem label="开始时间">
								<DatePicker />
							</FormItem>
						</Col>
						<Col span={6}>
							<FormItem label="结束时间">
								<DatePicker />
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary">搜索</Button>
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary" onClick={this.showModal}>
									添加请假
								</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<Modal visible={this.state.visible} onCancel={this.handleCancle}>
					弹层
				</Modal>
			</div>
		);
	}
}
const WrapedOperateForm = Form.create()(OperateForm);
// 数据表格
class Datatable extends Component {
	state = {
		visible: false,
		modalContent: 'assignmentDetail',
		columns: [
			{
				title: '学号',
				dataIndex: 'studentID',
				key: 'studentID'
			},
			{
				title: '请假类别',
				dataIndex: 'category',
				key: 'category'
			},
			{
				title: '班级',
				dataIndex: 'class',
				key: 'class'
			},
			{
				title: '请假时间(小时)',
				dataIndex: 'duration',
				key: 'duration'
			},
			{
				title: '开始时间',
				dataIndex: 'startTime',
				key: 'startTime'
			},
			{
				title: '结束时间',
				dataIndex: 'endTime',
				key: 'endTime'
			},
			{
				title: '状态',
				dataIndex: 'status',
				key: 'status'
			},
			{
				title: '处理时间',
				dataIndex: 'dealTime',
				key: 'dealTime'
			},
			{
				title: '审批人',
				dataIndex: 'approver',
				key: 'approver'
			},
			{
				title: '操作',
				dataIndex: 'operation',
				key: 'operation',
				render: () => (
					<span>
						<a onClick={this.showModal}>详情</a>
					</span>
				)
			}
		],
		data: [
			{
				key: '1',
				studentID: 25234235,
				category: '事假',
				class: '初一8班',
				duration: 4,
				startTime: '2018-12-24 10:02',
				endTime: '2018-12-24 14:02',
				status: '已审批',
				dealTime: '2018-12-24',
				approver: '查理兹塞隆'
			},
			{
				key: '2',
				studentID: 25234235,
				category: '事假',
				class: '初一8班',
				duration: 4,
				startTime: '2018-12-24 10:02',
				endTime: '2018-12-24 14:02',
				status: '已审批',
				dealTime: '2018-12-24',
				approver: '查理兹塞隆'
			},
			{
				key: '3',
				studentID: 25234235,
				category: '事假',
				class: '初一8班',
				duration: 4,
				startTime: '2018-12-24 10:02',
				endTime: '2018-12-24 14:02',
				status: '已审批',
				dealTime: '2018-12-24',
				approver: '查理兹塞隆'
			},
			{
				key: '4',
				studentID: 25234235,
				category: '事假',
				class: '初一8班',
				duration: 4,
				startTime: '2018-12-24 10:02',
				endTime: '2018-12-24 14:02',
				status: '已审批',
				dealTime: '2018-12-24',
				approver: '查理兹塞隆'
			},
			{
				key: '5',
				studentID: 25234235,
				category: '事假',
				class: '初一8班',
				duration: 4,
				startTime: '2018-12-24 10:02',
				endTime: '2018-12-24 14:02',
				status: '已审批',
				dealTime: '2018-12-24',
				approver: '查理兹塞隆'
			}
		]
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancle = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		return <Table columns={this.state.columns} dataSource={this.state.data} />;
	}
}
class studentLeave extends Component {
	render() {
		return (
			<div>
				<WrapedOperateForm />
				<Datatable />
			</div>
		);
	}
}
export default studentLeave;

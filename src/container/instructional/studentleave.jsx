import React, { Component } from 'react';
import { Form, Input, Button, Table, Modal, Select, Row, Col, DatePicker } from 'antd';
import StudentTable from '../../components/studentDataTable.jsx';
const FormItem = Form.Item;
const Option = Select.Option;
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
				<Modal visible={this.state.visible} onCancel={this.handleCancle} width={800}>
					<Addleave />
				</Modal>
			</div>
		);
	}
}
// 添加请假
class Addleave extends Component {
	state = {
		visible: false
	};
	handleFocus = () => {
		console.log(111);
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
				<Form layout="horizontal">
					<Row>
						<Col span={11}>
							<FormItem label="请假类型">
								<Select placeholder="请选择">
									<Option value="1">病假</Option>
									<Option value="2">事假</Option>
									<Option value="3">其它</Option>
								</Select>
							</FormItem>
						</Col>
						<Col span={11}>
							<FormItem label="请假学生" labelCol={{ offset: 2 }} wrapperCol={{ offset: 2 }}>
								<Input onClick={this.handleFocus} />
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<FormItem label="开始时间">
								<DatePicker />
							</FormItem>
						</Col>
						<Col span={12}>
							<FormItem label="结束时间">
								<DatePicker />
							</FormItem>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<FormItem label="请假时间">
								<FormItem label="天" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
									<Input />
								</FormItem>
								<FormItem label="时" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
									<Input />
								</FormItem>
							</FormItem>
						</Col>
					</Row>
					<FormItem label="请假事由">
						<TextArea rows={6} cols={33} />
					</FormItem>
					<FormItem label="老师备注">
						<TextArea rows={6} cols={33} />
					</FormItem>
				</Form>
				<Modal visible={this.state.visible} onCancel={this.handleCancel} width={800} footer={null}>
					<StudentTable />
				</Modal>
			</div>
		);
	}
}
const WrapedOperateForm = Form.create()(OperateForm);
// 请假详情
class LeaveDetail extends Component {
	render() {
		return (
			<Form>
				<FormItem label="请假类型">
					<Input disabled={true} value={'事假'} />
				</FormItem>
				<FormItem label="请假学生学号">
					<Input disabled={true} value={'163165+5+'} />
				</FormItem>
				<FormItem label="请假学生姓名">
					<Input disabled={true} value={'马龙白兰度'} />
				</FormItem>
				<FormItem label="开始时间">
					<Input disabled={true} value={'2018.12.14 12:18'} />
				</FormItem>
				<FormItem label="结束时间">
					<Input disabled={true} value={'2018.12.14 13:18'} />
				</FormItem>
				<FormItem>
					<FormItem label="天" labelCol={{ span: 3 }} wrapperCol={{ span: 4 }}>
						<Input disabled={true} value={0} />
					</FormItem>
					<FormItem label="时" labelCol={{ span: 3 }} wrapperCol={{ span: 4 }}>
						<Input disabled={true} value={2} />
					</FormItem>
				</FormItem>
				<FormItem label="请假事由">
					<TextArea value={'你猜'} disabled={true} />
				</FormItem>
				<FormItem label="审批意见">
					<TextArea value={'不告诉你'} disabled={true} />
				</FormItem>
				<FormItem label="审批人">
					<Input disabled={true} value={'强尼德普'} />
				</FormItem>
			</Form>
		);
	}
}
class Approve extends Component {
	render() {
		return (
			<Form layout="horizontal">
				<Row>
					<Col span={11}>
						<FormItem label="请假类型">
							<Select placeholder="请选择" disabled={true}>
								<Option value="1">病假</Option>
								<Option value="2">事假</Option>
								<Option value="3">其它</Option>
							</Select>
						</FormItem>
					</Col>
					<Col span={11}>
						<FormItem label="请假学生" labelCol={{ offset: 2 }} wrapperCol={{ offset: 2 }}>
							<Input disabled={true} />
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<FormItem label="开始时间">
							<DatePicker disabled={true} />
						</FormItem>
					</Col>
					<Col span={12}>
						<FormItem label="结束时间">
							<DatePicker disabled={true} />
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span={12}>
						<FormItem label="请假时间">
							<FormItem label="天" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input disabled={true} />
							</FormItem>
							<FormItem label="时" labelCol={{ span: 6 }} wrapperCol={{ span: 14 }}>
								<Input disabled={true} />
							</FormItem>
						</FormItem>
					</Col>
				</Row>
				<FormItem label="请假事由">
					<TextArea rows={6} cols={33} disabled={true} />
				</FormItem>
				<FormItem label="老师备注">
					<TextArea rows={6} cols={33} disabled={true} />
				</FormItem>
				<FormItem label="审批人">
					<Input disabled={true} value={'强尼德普'} />
				</FormItem>
				<FormItem>
					<Button type="primary" style={{ marginRight: 12 }}>
						批准
					</Button>
					<Button type="primary">拒批</Button>
				</FormItem>
			</Form>
		);
	}
}
// 数据表格
class Datatable extends Component {
	state = {
		detailVisible: false,
		modalContent: 'leavelDetail',
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
				render: (text, record) => {
					let Opert;
					if (record.status === '已审批') {
						Opert = (
							<a
								onClick={() => {
									this.setState({
										modalContent: 'leavelDetail'
									});
									this.showModal();
								}}
							>
								详情
							</a>
						);
					} else {
						Opert = (
							<a
								onClick={() => {
									this.setState({
										modalContent: 'approve'
									});
									this.showModal();
								}}
							>
								审批
							</a>
						);
					}
					return <span>{Opert}</span>;
				}
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
				status: '未审批',
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
		return (
			<div>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal visible={this.state.visible} onCancel={this.handleCancle} footer={null}>
					{this.state.modalContent === 'leavelDetail' ? <LeaveDetail /> : <Approve />}
				</Modal>
			</div>
		);
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

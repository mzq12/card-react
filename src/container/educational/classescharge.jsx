import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select, Row, Col, Transfer } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
class OperateForm extends Component {
	handleChange = (value) => {
		console.log(value);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.props.form.getFieldsValue());
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="inline">
				<Row>
					<Col span={5}>
						<FormItem label="班级名称">{getFieldDecorator('studentID')(<Input />)}</FormItem>
					</Col>

					<Col span={4}>
						<FormItem label="届次">
							{getFieldDecorator('grade', { initialValue: '所有班级' })(
								<Select onChange={this.handleChange}>
									<Option value="11">2018级</Option>
									<Option value="12">2017级</Option>
									<Option value="13">2016级</Option>
									<Option value="14">2015级</Option>
								</Select>
							)}
						</FormItem>
					</Col>
					<Col span={2}>
						<FormItem>
							<Button type="primary" onClick={this.handleSubmit}>
								搜索
							</Button>
						</FormItem>
					</Col>
					<Col span={2}>
						<FormItem>
							<Button type="primary" onClick={this.props.setModalContent}>
								添加班级
							</Button>
						</FormItem>
					</Col>
				</Row>
			</Form>
		);
	}
}
const WrapedOperateForm = Form.create()(OperateForm);
// 添加课程
class AddClassForm extends Component {
	handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	handleBlur = () => {
		console.log('blur');
	};

	handleFocus = () => {
		console.log('focus');
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.props.form.getFieldsValue());
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="班级类型">
									{getFieldDecorator('gender', { initialValue: '初中' })(
										<Select onChange={this.handleChange}>
											<Option value="11">小学</Option>
											<Option value="12">初中</Option>
											<Option value="13">大学</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级代码">
									{getFieldDecorator('classID', {
										rules: [ { required: true, message: '班级代码必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学制">
									{getFieldDecorator('zuezhi', { initialValue: '3年' })(
										<Select onChange={this.handleChange}>
											<Option value="11">3年</Option>
											<Option value="14">4年</Option>
											<Option value="12">5年</Option>
											<Option value="13">6年</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row>
							<Col span={24}>
								<FormItem label="年级">
									{getFieldDecorator('ntional', { initialValue: '2018级' })(
										<Select>
											<Option value="2018">2018级</Option>
											<Option value="2017">2017级</Option>
											<Option value="2016">2016级</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('inSchoolTime', {
										rules: [ { required: true, message: '班级名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('inSchool', {
										rules: [ { required: true, message: '班级名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
					</Col>
				</Row>

				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						保存
					</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrapedAddClassForm = Form.create()(AddClassForm);
// 修改课程
class EditClassForm extends Component {
	handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	handleBlur = () => {
		console.log('blur');
	};

	handleFocus = () => {
		console.log('focus');
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.props.form.getFieldsValue());
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="班级类型">
									{getFieldDecorator('gender', { initialValue: '初中' })(
										<Select onChange={this.handleChange}>
											<Option value="11">小学</Option>
											<Option value="12">初中</Option>
											<Option value="13">大学</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级代码">
									{getFieldDecorator('classID', {
										rules: [ { required: true, message: '班级代码必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学制">
									{getFieldDecorator('zuezhi', { initialValue: '3年' })(
										<Select onChange={this.handleChange}>
											<Option value="11">3年</Option>
											<Option value="14">4年</Option>
											<Option value="12">5年</Option>
											<Option value="13">6年</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row>
							<Col span={24}>
								<FormItem label="年级">
									{getFieldDecorator('ntional', { initialValue: '2018级' })(
										<Select>
											<Option value="2018">2018级</Option>
											<Option value="2017">2017级</Option>
											<Option value="2016">2016级</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('inSchoolTime', {
										rules: [ { required: true, message: '班级名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('inSchool', {
										rules: [ { required: true, message: '班级名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
					</Col>
				</Row>

				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						保存
					</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrapedEditClassForm = Form.create()(EditClassForm);

// 指定班主任
const rowSelection = {
	type: 'radio',
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name
	})
};
class AssignChargeTeacher extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '老师工号',
					dataIndex: 'teacherId',
					key: 'teacherId'
				},
				{
					title: '老师姓名',
					dataIndex: 'teacherName',
					key: 'teacherName'
				}
			],
			data: [
				{
					key: '1',
					teacherId: 2018008,
					teacherName: 'oceanman'
				},
				{
					key: '2',
					teacherId: 2018008,
					teacherName: 'oceanman'
				},
				{
					key: '3',
					teacherId: 2018008,
					teacherName: 'oceanman'
				},
				{
					key: '4',
					teacherId: 2018008,
					teacherName: 'oceanman'
				}
			]
		};
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="assign_container">
				<Form layout="inline">
					<FormItem>
						{getFieldDecorator('techerName', {
							rules: [ { required: true, message: '教师姓名必填' } ]
						})(<Input />)}
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={rowSelection} />
				<Button type="primary">保存</Button>
			</div>
		);
	}
}
const WrapedAssignFrom = Form.create()(AssignChargeTeacher);
// 指定班长
class AssignClassMonitor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '学生学号',
					dataIndex: 'studentId',
					key: 'studentId'
				},
				{
					title: '老师姓名',
					dataIndex: 'studentName',
					key: 'studentName'
				}
			],
			data: [
				{
					key: '1',
					studentId: 2018008,
					studentName: 'oceanman'
				},
				{
					key: '2',
					studentId: 2018008,
					studentName: 'oceanman'
				},
				{
					key: '3',
					studentId: 2018008,
					studentName: 'oceanman'
				},
				{
					key: '4',
					studentId: 2018008,
					studentName: 'oceanman'
				}
			]
		};
	}
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="assign_container">
				<Form layout="inline">
					<FormItem>
						{getFieldDecorator('techerName', {
							rules: [ { required: true, message: '教师姓名必填' } ]
						})(<Input />)}
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={rowSelection} />
				<Button type="primary">保存</Button>
			</div>
		);
	}
}
const WrapedMonitorForm = Form.create()(AssignClassMonitor);
/* ********************************************************* */
// 班级课程
function CourseModalContent(props) {
	switch (props.type) {
		case 'addCourse':
			return <WrapedAddCourse />;
		case 'editCourse':
			return <WrapedEditCourse />;
		default:
			return <WrapedAddCourse />;
	}
}

class Course extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			modalContent: 'addCourse',
			columns: [
				{
					title: '学年',
					dataIndex: 'schoolYear',
					key: 'schoolYear'
				},
				{
					title: '学期',
					dataIndex: 'term',
					key: 'term'
				},
				{
					title: '班级编码',
					dataIndex: 'classID',
					key: 'classID'
				},
				{
					title: '班级名称',
					dataIndex: 'className',
					key: 'className'
				},
				{
					title: '课程类型',
					dataIndex: 'courseCate',
					key: 'courseCate'
				},
				{
					title: '课程编码',
					dataIndex: 'courseID',
					key: 'courseID'
				},
				{
					title: '课程名称',
					dataIndex: 'courseName',
					key: 'courseName'
				},
				{
					title: '老师名称',
					dataIndex: 'teacherName',
					key: 'teacherName'
				},
				{
					title: '电话号',
					dataIndex: 'phone',
					key: 'phone'
				},
				{
					title: '操作',
					dataIndex: 'operation',
					key: 'operation',
					render: (text, record) => (
						<span>
							<a
								onClick={() => {
									this.setState({
										modalContent: 'editCourse'
									});
									this.showModal();
								}}
							>
								编辑
							</a>
							<Divider type="vertical" />
							<Popconfirm title="确认删除?">
								<a>删除</a>
							</Popconfirm>
						</span>
					)
				}
			],
			data: [
				{
					key: '1',
					schoolYear: '2018-2019',
					term: 1,
					classID: '20181224',
					className: '初一2班',
					courseCate: '固定课',
					courseID: '01',
					courseName: '语文',
					teacherName: '陈粒',
					phone: '13669852314'
				},
				{
					key: '2',
					schoolYear: '2018-2019',
					term: 1,
					classID: '20181224',
					className: '初一2班',
					courseCate: '固定课',
					courseID: '01',
					courseName: '语文',
					teacherName: '陈粒',
					phone: '13669852314'
				},
				{
					key: '3',
					schoolYear: '2018-2019',
					term: 1,
					classID: '20181224',
					className: '初一2班',
					courseCate: '固定课',
					courseID: '01',
					courseName: '语文',
					teacherName: '陈粒',
					phone: '13669852314'
				},
				{
					key: '4',
					schoolYear: '2018-2019',
					term: 1,
					classID: '20181224',
					className: '初一2班',
					courseCate: '固定课',
					courseID: '01',
					courseName: '语文',
					teacherName: '陈粒',
					phone: '13669852314'
				}
			]
		};
	}
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
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="course_container">
				<Form layout="inline">
					<Row>
						<Col span={5}>
							<FormItem label="年级">
								{getFieldDecorator('grade', { initialValue: '2018-2019' })(
									<Select onChange={this.handleChange}>
										<Option value="11">全部</Option>
										<Option value="12">2017-2018</Option>
										<Option value="13">2018-2019</Option>
										<Option value="14">2019-2020</Option>
									</Select>
								)}
							</FormItem>
						</Col>

						<Col span={5}>
							<FormItem label="学期">
								{getFieldDecorator('term', { initialValue: '第一学期' })(
									<Select onChange={this.handleChange}>
										<Option value="11">第一学期</Option>
										<Option value="12">第二学期</Option>
									</Select>
								)}
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary" onClick={this.handleSubmit}>
									搜索
								</Button>
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary" onClick={this.showModal}>
									添加课程
								</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					visible={this.state.visible}
					onCancel={this.handleCancel}
					title={this.state.modalContent === 'addCourse' ? '添加课程' : '编辑课程'}
				>
					<CourseModalContent type={this.state.modalContent} />
				</Modal>
			</div>
		);
	}
}
const WrapedCourse = Form.create()(Course);

// 添加课程
class AddCourseForm extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				<FormItem label="学年">
					<Select>
						<Option value="1">2018-2019</Option>
						<Option value="2">2017-2018</Option>
						<Option value="3">2017-2017</Option>
					</Select>
				</FormItem>
				<FormItem label="学期">
					<Select>
						<Option value="1">第一学期</Option>
						<Option value="2">第二学期</Option>
						<Option value="3">第三学期</Option>
					</Select>
				</FormItem>
				<FormItem label="班级">
					{getFieldDecorator('class', {
						rules: [ { required: true, message: '班级必填' } ]
					})(<Input />)}
				</FormItem>
				<FormItem label="课程">
					{getFieldDecorator('course', { rules: [ { required: true, message: '课程必选' } ] })(
						<Select
							showSearch
							placeholder="Select a course"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							<Option value="1">数学</Option>
							<Option value="2">语文</Option>
							<Option value="3">英语</Option>
						</Select>
					)}
				</FormItem>
				<FormItem label="老师">
					{getFieldDecorator('teacher', { rules: [ { required: true, message: '老师必选' } ] })(
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							<Option value="1">陈粒</Option>
							<Option value="2">艾德兰希</Option>
							<Option value="3">马修麦康纳</Option>
						</Select>
					)}
				</FormItem>
			</Form>
		);
	}
}
const WrapedAddCourse = Form.create()(AddCourseForm);
// 编辑课程
class EditCourseForm extends Component {
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				<FormItem label="学年">
					<Select>
						<Option value="1">2018-2019</Option>
						<Option value="2">2017-2018</Option>
						<Option value="3">2017-2017</Option>
					</Select>
				</FormItem>
				<FormItem label="学期">
					<Select>
						<Option value="1">第一学期</Option>
						<Option value="2">第二学期</Option>
						<Option value="3">第三学期</Option>
					</Select>
				</FormItem>
				<FormItem label="班级">
					{getFieldDecorator('class', {
						rules: [ { required: true, message: '班级必填' } ]
					})(<Input />)}
				</FormItem>
				<FormItem label="课程">
					{getFieldDecorator('course', { rules: [ { required: true, message: '课程必选' } ] })(
						<Select
							showSearch
							placeholder="Select a course"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							<Option value="1">数学</Option>
							<Option value="2">语文</Option>
							<Option value="3">英语</Option>
						</Select>
					)}
				</FormItem>
				<FormItem label="老师">
					{getFieldDecorator('teacher', { rules: [ { required: true, message: '老师必选' } ] })(
						<Select
							showSearch
							placeholder="Select a person"
							optionFilterProp="children"
							filterOption={(input, option) =>
								option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
						>
							<Option value="1">陈粒</Option>
							<Option value="2">艾德兰希</Option>
							<Option value="3">马修麦康纳</Option>
						</Select>
					)}
				</FormItem>
			</Form>
		);
	}
}
const WrapedEditCourse = Form.create()(EditCourseForm);
/* ********************************************************* */
// 分班
class AssignClass extends Component {
	state = {
		mockData: [],
		targetKeys: []
	};

	componentDidMount() {
		this.getMock();
	}

	getMock = () => {
		const targetKeys = [];
		const mockData = [];
		for (let i = 0; i < 20; i++) {
			const data = {
				key: i.toString(),
				title: `学生姓名`,
				description: `学号2018${i + 1}`,
				chosen: Math.random() * 2 > 1
			};
			if (data.chosen) {
				targetKeys.push(data.key);
			}
			mockData.push(data);
		}
		this.setState({ mockData, targetKeys });
	};

	handleChange = (targetKeys) => {
		this.setState({ targetKeys });
	};

	render() {
		return (
			<div>
				<Form layout="inline">
					<FormItem label="原年级">
						<Select placeholder="请选择年级" style={{ width: '200px', marginBottom: '18px' }}>
							<Option value="2017">2017</Option>
							<Option value="2018">2018</Option>
							<Option value="2019">2019</Option>
						</Select>
					</FormItem>
				</Form>
				<Transfer
					dataSource={this.state.mockData}
					showSearch
					listStyle={{
						width: 400,
						height: 300
					}}
					titles={[ '', '当前班级学生列表' ]}
					operations={[ 'to right', 'to left' ]}
					targetKeys={this.state.targetKeys}
					onChange={this.handleChange}
					render={(item) => `${item.title}-${item.description}`}
				/>
			</div>
		);
	}
}

// 指定 Modal 显示内容
function ModalContent(props) {
	switch (props.type) {
		case 'addClass':
			return <WrapedAddClassForm />;
		case 'editClass':
			return <WrapedEditClassForm />;
		case 'assignTeacher':
			return <WrapedAssignFrom />;
		case 'assignMonitor':
			return <WrapedMonitorForm />;
		case 'course':
			return <WrapedCourse />;
		case 'assignClass':
			return <AssignClass />;
		default:
			return <WrapedAddClassForm />;
	}
}

class classesCharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			modalContent: 'addClass',
			columns: [
				{
					title: '班级名称',
					dataIndex: 'className',
					key: 'class'
				},
				{
					title: '班级代码',
					dataIndex: 'studentID',
					key: 'studentID'
				},
				{
					title: '班主任',
					dataIndex: 'studentName',
					key: 'studentName'
				},
				{
					title: '班长名称',
					dataIndex: 'banzhangmingcheng',
					key: 'banzhangmingcheng'
				},
				{
					title: '班级类型',
					dataIndex: 'gender',
					key: 'gender'
				},
				{
					title: '班级人数',
					dataIndex: 'studentStatus',
					key: 'studentStatus'
				},
				{
					title: '操作',
					dataIndex: 'operation',
					key: 'operation',
					render: (text, record) => (
						<span>
							<a
								onClick={() => {
									this.setModalContent('editClass');
									this.showModal();
								}}
							>
								修改
							</a>
							<Divider type="vertical" />
							<a
								onClick={() => {
									this.setModalContent('assignTeacher');
									this.showModal();
								}}
							>
								指定班主任
							</a>
							<Divider type="vertical" />
							<a
								onClick={() => {
									this.setModalContent('assignMonitor');
									this.showModal();
								}}
							>
								指定班长
							</a>
							<Divider type="vertical" />
							<a
								onClick={() => {
									this.setModalContent('course');
									this.showModal();
								}}
							>
								班级课程
							</a>
							<Divider type="vertical" />
							<a
								onClick={() => {
									this.setModalContent('assignClass');
									this.showModal();
								}}
							>
								分班
							</a>
						</span>
					)
				}
			],
			data: [
				{
					key: '1',
					className: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					banzhangmingcheng: 'Nicheg',
					gender: '初中',
					studentStatus: '45人'
				},
				{
					key: '2',
					className: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					banzhangmingcheng: 'Nicheg',
					gender: '初中',
					studentStatus: '45人'
				},
				{
					key: '3',
					className: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					banzhangmingcheng: 'Nicheg',
					gender: '初中',
					studentStatus: '45人'
				},
				{
					key: '4',
					className: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					banzhangmingcheng: 'Nicheg',
					gender: '初中',
					studentStatus: '45人'
				}
			]
		};
	}
	handleOk = (e) => {
		this.setState({
			visible: false
		});
	};

	handleCancel = (e) => {
		this.setState({
			visible: false
		});
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	setModalContent = (type) => {
		this.setState({
			modalContent: type
		});
	};
	render() {
		return (
			<div className="student_charge_container">
				<WrapedOperateForm
					showModal={this.showModal}
					setModalContent={() => {
						this.setModalContent('addClass');
						this.showModal();
					}}
				/>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					width={1000}
					footer={null}
					title="添加班级"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<ModalContent type={this.state.modalContent} />
				</Modal>
			</div>
		);
	}
}

export default classesCharge;

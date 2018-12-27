import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select, Row, Col, Transfer, message } from 'antd';
import http from '../../config/axios.config';
import SheetToJson from '../../components/sheetToJson.jsx';
const FormItem = Form.Item;
const Option = Select.Option;
const modalContext = React.createContext();
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
// 添加班级
class SchoolSystem extends Component {
	render() {
		switch (this.props.type) {
			case '1':
				return (
					<Select onChange={this.props.handleValue} placeholder="请选择年级">
						<Option value="1">一年级</Option>
						<Option value="2">二年级</Option>
						<Option value="3">三年级</Option>
						<Option value="4">四年级</Option>
						<Option value="5">五年级</Option>
						<Option value="6">六年级</Option>
					</Select>
				);
			case '2':
				return (
					<Select onChange={this.props.handleValue} placeholder="请选择年级">
						<Option value="6">初一</Option>
						<Option value="7">初二</Option>
						<Option value="8">初三</Option>
					</Select>
				);
			case '3':
				return (
					<Select onChange={this.props.handleValue} placeholder="请选择年级">
						<Option value="9">高一</Option>
						<Option value="10">高二</Option>
						<Option value="11">高三</Option>
					</Select>
				);
			default:
				return '';
		}
	}
}

class AddClassForm extends Component {
	state = {
		class_type: '1'
	};
	handleClassTypeChange = (value) => {
		this.setState({
			class_type: value
		});
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
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				http({
					method: 'post',
					data: values,
					url: '/aj/class/addclass'
				}).then((res) => {
					if (res.data.code === 10000) {
						message.info('添加成功');
						this.context.cancelModal();
						this.context.fetchClasses(1, 10);
					} else {
						message.error(res.data.msg);
					}
				});
			}
		});
	};
	handleBatchAdd = (data) => {
		const param = { classes: JSON.stringify(data) };
		http({
			method: 'post',
			data: param,
			url: '/aj/class/batchadd'
		}).then((res) => {
			if (res.data.code === 10000) {
				message.info('添加成功');
				this.context.cancelModal();
				this.context.fetchClasses(1, 10);
			} else {
				message.error(res.data.msg);
			}
		});
	};
	handleSelectValue = (value) => {
		this.props.form.setFieldsValue({ grade: value });
	};
	static contextType = modalContext;
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="班级类型">
									{getFieldDecorator('class_type', {
										rules: [ { required: true, message: '请选择班级类型' } ]
									})(
										<Select onChange={this.handleClassTypeChange} placeholder="选择班级类型">
											<Option value="1">小学</Option>
											<Option value="2">初中</Option>
											<Option value="3">高中</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级代码">
									{getFieldDecorator('class_no', {
										rules: [ { required: true, message: '班级代码必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学制">
									{getFieldDecorator('school_system', { initialValue: '3年' })(
										<Select>
											<Option value="3">3年</Option>
											<Option value="6">6年</Option>
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
									{getFieldDecorator('grade')(
										<SchoolSystem
											type={this.state.class_type}
											handleValue={this.handleSelectValue}
										/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('class_title', {
										rules: [ { required: true, message: '班级名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="批量上传">
									<SheetToJson accept=".xlsx, .xls" parseDone={this.handleBatchAdd} />
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
// 修改班级
class EditClassForm extends Component {
	static contextType = modalContext;
	state = {
		class_type: '1'
	};
	handleClassTypeChange = (value) => {
		this.setState({
			class_type: value
		});
	};
	handleSelectValue = (value) => {
		this.props.form.setFieldsValue({ grade: value });
	};
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
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				http({
					method: 'post',
					data: values,
					url: '/aj/class/editclass'
				}).then((res) => {
					if (res.data.code === 10000) {
						message.info('修改成功');
						console.log(this.context.currentPage);
						this.context.fetchClasses(this.context.currentPage, 10);
						this.context.cancelModal();
					} else {
						message.error(res.data.msg);
					}
				});
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const record = this.context.record;
		console.log(record);
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="班级类型">
									{getFieldDecorator('class_type', {
										rules: [ { required: true, message: '请选择班级类型' } ]
									})(
										<Select onChange={this.handleClassTypeChange} placeholder="选择班级类型">
											<Option value="1">小学</Option>
											<Option value="2">初中</Option>
											<Option value="3">高中</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级代码">
									{getFieldDecorator('class_no', {
										initialValue: record.class_no,
										rules: [ { required: true, message: '班级代码必填' } ]
									})(<Input disabled />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学制">
									{getFieldDecorator('school_system')(
										<Select placeholder="请选择学制">
											<Option value="3">3年</Option>
											<Option value="6">6年</Option>
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
									{getFieldDecorator('grade')(
										<SchoolSystem
											type={this.state.class_type}
											handleValue={this.handleSelectValue}
										/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级名称">
									{getFieldDecorator('class_title', {
										initialValue: record.class_title,
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

class AssignChargeTeacher extends Component {
	state = {
		columns: [
			{
				title: '老师工号',
				dataIndex: 'job_num',
				key: 'job_num'
			},
			{
				title: '老师姓名',
				dataIndex: 'name',
				key: 'name'
			}
		],
		data: []
	};
	static contextType = modalContext;

	rowSelection = {
		type: 'radio',
		onChange: (selectedRowKeys, selectedRows) => {
			this.assignData.header_teacher_id = selectedRowKeys[0];
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name
		})
	};
	componentDidMount() {
		this.fetchTeachers(1, 10);
	}
	fetchTeachers = (page, count) => {
		http({
			method: 'post',
			url: '/aj/teacher/getteachers',
			data: {
				page: page,
				count: count
			}
		}).then((res) => {
			if (res.data.code === 10000) {
				let data = res.data.data.teachers.map((item) => {
					item.key = item.teacher_id;
					return item;
				});
				let total_count = res.data.data.total_count;
				this.setState({
					data: data,
					total_count: total_count
				});
			} else {
				message.error(res.data.msg);
			}
		});
	};
	assignData = {
		class_no: '',
		header_teacher_id: ''
	};
	assignHeader = () => {
		http({
			method: 'post',
			url: '/aj/teacher/assignheader',
			data: this.assignData
		}).then((res) => {
			if (res.data.code === 10000) {
				this.context.cancelModal();
				message.info('添加成功');
			} else {
				message.error(res.data.msg);
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		this.assignData.class_no = this.context.assignParam.class_no;
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
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={this.rowSelection} />
				<Button type="primary" onClick={this.assignHeader}>
					保存
				</Button>
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
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection />
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
	state = {
		visible: false,
		modalContent: 'addClass',
		columns: [
			{
				title: '班级名称',
				dataIndex: 'class_title',
				key: 'class_title'
			},
			{
				title: '班级代码',
				dataIndex: 'class_no',
				key: 'class_no'
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
				dataIndex: 'class_type',
				key: 'class_type',
				render: (text) => {
					if (text === 1) {
						return '小学';
					} else if (text === 2) {
						return '初中';
					} else if (text === 3) {
						return '高中';
					}
				}
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
								this.setState({
									record: record
								});
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
								this.setState({
									assignParam: {
										class_no: record.class_no
									}
								});
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
		data: [],
		total_count: 10,
		selectedRowKeys: [],
		assignParam: {
			class_no: '',
			header_teacher_id: ''
		},
		record: null,
		currentPage: 1,
		loading: true
	};
	componentDidMount() {
		this.fetchClasses(1, 10);
	}
	fetchClasses = (page, count) => {
		this.setState({
			loading: true
		});
		http({
			method: 'post',
			url: '/aj/class/getclasses',
			data: {
				page: page,
				count: count
			}
		}).then((res) => {
			if (res.data.code === 10000) {
				let data = res.data.data.grades.map((item) => {
					item.key = item.class_no;
					return item;
				});
				let total_count = res.data.data.total_count;
				this.setState({
					data: data,
					total_count: total_count,
					loading: false
				});
			} else {
				message.error(res.data.msg);
			}
		});
	};
	rowSelection = {
		onChange: (selectedRowKeys) => {
			this.setState({
				selectedRowKeys: selectedRowKeys
			});
		},
		getCheckboxProps: (record) => ({
			disabled: record.name === 'Disabled User', // Column configuration not to be checked
			name: record.name
		})
	};
	batchDelete = () => {
		http({
			method: 'post',
			data: {
				classes: JSON.stringify(this.state.selectedRowKeys)
			},
			url: '/aj/class/batchdelete'
		}).then((res) => {
			if (res.data.code === 10000) {
				message.info('删除成功');
				this.handleCancel();
				this.fetchClasses(1, 10);
			} else {
				message.error(res.data.msg);
			}
		});
	};
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
				<Table
					loading={this.state.loading}
					columns={this.state.columns}
					dataSource={this.state.data}
					pagination={{
						size: 10,
						total: this.state.total_count,
						onChange: (page) => {
							this.setState({
								currentPage: page
							});
							this.fetchClasses(page, 10);
						}
					}}
					rowSelection={this.rowSelection}
				/>
				<Button onClick={this.batchDelete}>批量删除</Button>
				<Modal
					width={1000}
					footer={null}
					title="操作框"
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<modalContext.Provider
						value={{
							cancelModal: this.handleCancel,
							fetchClasses: this.fetchClasses,
							assignParam: this.state.assignParam,
							record: this.state.record,
							currentPage: this.state.currentPage
						}}
					>
						<ModalContent type={this.state.modalContent} />
					</modalContext.Provider>
				</Modal>
			</div>
		);
	}
}

export default classesCharge;

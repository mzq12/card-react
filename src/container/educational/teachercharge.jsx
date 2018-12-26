import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Select, Row, Col, Upload, Icon, message } from 'antd';
import http from '../../config/axios.config';
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
						<FormItem label="工号">{getFieldDecorator('studentID')(<Input />)}</FormItem>
					</Col>
					<Col span={5}>
						<FormItem label="姓名">{getFieldDecorator('studentName')(<Input />)}</FormItem>
					</Col>
					<Col span={4}>
						<FormItem label="状态">
							{getFieldDecorator('grade', { initialValue: '请选择' })(
								<Select onChange={this.handleChange}>
									<Option value="11">在职</Option>
									<Option value="12">离职</Option>
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
							<Button type="primary" onClick={this.props.showModal}>
								添加
							</Button>
						</FormItem>
					</Col>
				</Row>
			</Form>
		);
	}
}
class PicturesWall extends React.Component {
	state = {
		previewVisible: false,
		previewImage: '',
		fileList: []
	};

	handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = (file) => {
		this.setState({
			previewImage: file.url || file.thumbUrl,
			previewVisible: true
		});
	};

	handleChange = ({ fileList }) => this.setState({ fileList });

	render() {
		const { previewVisible, previewImage, fileList } = this.state;
		const uploadButton = (
			<div>
				<Icon type="plus" />
				<div className="ant-upload-text">Upload</div>
			</div>
		);
		return (
			<div className="clearfix">
				<Upload
					action="//jsonplaceholder.typicode.com/posts/"
					listType="picture-card"
					fileList={fileList}
					onPreview={this.handlePreview}
					onChange={this.handleChange}
				>
					{fileList.length >= 1 ? null : uploadButton}
				</Upload>
				<Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
					<img alt="example" style={{ width: '100%' }} src={previewImage} />
				</Modal>
			</div>
		);
	}
}
class AddTeacherForm extends Component {
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
								<FormItem label="工号">
									{getFieldDecorator('studentID', {
										rules: [ { required: true, message: '工号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="姓名">
									{getFieldDecorator('studentName', {
										rules: [ { required: true, message: '姓名必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="性别">
									{getFieldDecorator('gender', { initialValue: '请选择' })(
										<Select onChange={this.handleChange}>
											<Option value="11">男</Option>
											<Option value="12">女</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="手机号">
									{getFieldDecorator('mobile', {
										rules: [ { required: true, message: '手机号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="工作电话">{getFieldDecorator('birthday')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学历">
									{getFieldDecorator('class', {
										initialValue: '请选择'
									})(
										<Select onChange={this.handleChange}>
											<Option value="11">大专以下</Option>
											<Option value="12">大专</Option>
											<Option value="13">大学本科</Option>
											<Option value="14">硕士研究生</Option>
											<Option value="15">博士研究生</Option>
											<Option value="16">其他</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="职称">
									{getFieldDecorator('werwer', {
										initialValue: '请选择'
									})(
										<Select onChange={this.handleChange}>
											<Option value="11">正高级教师</Option>
											<Option value="12">高级教师</Option>
											<Option value="13">一级教师</Option>
											<Option value="14">二级教师</Option>
											<Option value="15">三级教师</Option>
											<Option value="16">其他</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="政治面貌">
									{getFieldDecorator('political', { initialValue: '请选择' })(
										<Select onChange={this.handleChange}>
											<Option value="11">共青团员</Option>
											<Option value="12">中共党员</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row>
							<Col span={24} style={{ marginBottom: '12px' }}>
								<FormItem label="头像上传">{getFieldDecorator('img')(<PicturesWall />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="民族">
									{getFieldDecorator('ntional')(
										<Select
											showSearch
											style={{ width: 200 }}
											placeholder="Select a person"
											onChange={this.handleChange}
											onFocus={this.handleFocus}
											onBlur={this.handleBlur}
										>
											<Option value="汉族">汉族</Option>
											<Option value="蒙古族">蒙古族</Option>
											<Option value="藏族">藏族</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="身份证号">{getFieldDecorator('IDNumber')(<Input />)}</FormItem>
							</Col>
						</Row>

						<Row>
							<Col span={24}>
								<FormItem label="籍贯">{getFieldDecorator('address')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="所属部门">
									{getFieldDecorator('theYellow', { initialValue: '请选择' })(
										<Select>
											<Option value="0">教学部</Option>
											<Option value="1">教务处</Option>
										</Select>
									)}
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
const WrapedOperateForm = Form.create()(OperateForm);
const WrapedAddTeacherForm = Form.create()(AddTeacherForm);
class teacherCharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			columns: [
				{
					title: '工号',
					dataIndex: 'job_num',
					key: 'job_num'
				},
				{
					title: '姓名',
					dataIndex: 'name',
					key: 'name'
				},
				{
					title: '所属角色',
					dataIndex: 'role',
					key: 'role'
				},
				{
					title: '状态',
					dataIndex: 'data_state',
					key: 'data_state',
					render: (text) => {
						console.log(text);
						if (text === 0) {
							return '删除';
						} else if (text === 1) {
							return '在职';
						} else if (text === 2) {
							return '离职';
						}
					}
				},
				{
					title: '操作',
					dataIndex: 'operation',
					key: 'operation',
					render: (text, record) => (
						<span>
							<a>重置密码</a>
							<Divider type="vertical" />
							<a>修改</a>
							<Divider type="vertical" />
							<a>删除</a>
						</span>
					)
				}
			],
			data: []
		};
	}
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
	render() {
		return (
			<div className="student_charge_container">
				<WrapedOperateForm showModal={this.showModal} />
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					width={1000}
					footer={null}
					title="添加教师"
					bodyStyle={{ overflow: 'scroll', maxHeight: '580px' }}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<WrapedAddTeacherForm />
				</Modal>
			</div>
		);
	}
}

export default teacherCharge;

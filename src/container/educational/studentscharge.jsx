import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select, Row, Col, Upload, Icon } from 'antd';
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
						<FormItem label="学号">{getFieldDecorator('studentID')(<Input />)}</FormItem>
					</Col>
					<Col span={5}>
						<FormItem label="姓名">{getFieldDecorator('studentName')(<Input />)}</FormItem>
					</Col>
					<Col span={4}>
						<FormItem label="年级">
							{getFieldDecorator('grade', { initialValue: '所有未毕业班级' })(
								<Select onChange={this.handleChange}>
									<Option value="11">2018级</Option>
									<Option value="12">2017级</Option>
									<Option value="13">2016级</Option>
									<Option value="14">2015级</Option>
								</Select>
							)}
						</FormItem>
					</Col>
				</Row>
				<Row>
					<Col span={5}>
						<FormItem label="学籍状态">
							{getFieldDecorator('state', { initialValue: '请选择' })(
								<Select onChange={this.handleChange}>
									<Option value="11">注册</Option>
									<Option value="12">休学</Option>
									<Option value="13">毕业</Option>
									<Option value="14">退学</Option>
								</Select>
							)}
						</FormItem>
					</Col>

					<Col span={5}>
						<FormItem label="班级">
							{getFieldDecorator('class', { initialValue: '请选择' })(
								<Select onChange={this.handleChange}>
									<Option value="11">初一1班</Option>
									<Option value="12">初一2班</Option>
									<Option value="13">初一3班</Option>
									<Option value="14">初一4班</Option>
								</Select>
							)}
						</FormItem>
					</Col>
					<Col span={5}>
						<FormItem label="是否住校">
							{getFieldDecorator('isresident', { initialValue: '请选择' })(
								<Select onChange={this.handleChange}>
									<Option value="11">住读生</Option>
									<Option value="12">走读生</Option>
									<Option value="13">通校生</Option>
								</Select>
							)}
						</FormItem>
					</Col>
					<Col span={5}>
						<FormItem label="进离校">
							{getFieldDecorator('inOrOut', { initialValue: '请选择' })(
								<Select onChange={this.handleChange}>
									<Option value="11">已关闭</Option>
									<Option value="12">已开启</Option>
								</Select>
							)}
						</FormItem>
					</Col>
				</Row>
				<Row>
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
								添加学生
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
// 添加学生
class AddStudetForm extends Component {
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
								<FormItem label="学号">
									{getFieldDecorator('studentID', {
										rules: [ { required: true, message: '学号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="姓名">
									{getFieldDecorator('studentName', {
										rules: [ { required: true, message: '学生姓名必填' } ]
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
								<FormItem label="出生日期">{getFieldDecorator('birthday')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班级">
									{getFieldDecorator('class', {
										initialValue: '请选择',
										rules: [ { required: true, message: '班级必填' } ]
									})(
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
						<Row>
							<Col span={24}>
								<FormItem label="学籍状态">
									{getFieldDecorator('studentStatus', {
										initialValue: '请选择',
										rules: [ { required: true, message: '学籍状态必填' } ]
									})(
										<Select onChange={this.handleChange}>
											<Option value="11">休学</Option>
											<Option value="12">毕业</Option>
											<Option value="13">退学</Option>
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
								<FormItem label="家庭电话">{getFieldDecorator('familyPhone')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="籍贯">{getFieldDecorator('address')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="住宿类型">
									{getFieldDecorator('accTypes', {
										initialValue: '请选择'
									})(
										<Select onChange={this.handleChange}>
											<Option value="11">住校生</Option>
											<Option value="12">走读生</Option>
											<Option value="13">通校生</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="全国学籍编号">{getFieldDecorator('nationNumber')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学生类型">
									{getFieldDecorator('studentTypes', {
										initialValue: '请选择'
									})(
										<Select onChange={this.handleChange}>
											<Option value="11">小学</Option>
											<Option value="12">初中</Option>
											<Option value="13">高中</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="原毕业学校">{getFieldDecorator('prevSchool')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="班内编号">{getFieldDecorator('inClassNumber')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="户籍社区/村">{getFieldDecorator('community')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="户籍镇/街">{getFieldDecorator('town')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="户口类别">{getFieldDecorator('residenceCate')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="监护人">{getFieldDecorator('guardian')(<Input />)}</FormItem>
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
								<FormItem label="入学时间">
									{getFieldDecorator('inSchoolTime', {
										rules: [ { required: true, message: '学号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="手机号码">{getFieldDecorator('phoneNumber')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="家庭邮编">{getFieldDecorator('postcode')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="家庭地址">{getFieldDecorator('familyAddress')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学籍辅号">{getFieldDecorator('auxNo')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="入学方式">{getFieldDecorator('inWay')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="入学总分">{getFieldDecorator('totalGoal')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="户籍省县">{getFieldDecorator('huji')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="监护人手机号">{getFieldDecorator('guardianPhone')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="港澳台侨外">
									{getFieldDecorator('theYellow', { initialValue: '请选择' })(
										<Select>
											<Option value="0">否</Option>
											<Option value="1">是</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="学前教育">
									{getFieldDecorator('studyBefore', { initialValue: '请选择' })(
										<Select>
											<Option value="0">否</Option>
											<Option value="1">是</Option>
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
const AddStudetFormForm = Form.create()(AddStudetForm);
class studentsCharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			columns: [
				{
					title: '班级',
					dataIndex: 'class',
					key: 'class'
				},
				{
					title: '学号',
					dataIndex: 'studentID',
					key: 'studentID'
				},
				{
					title: '学生姓名',
					dataIndex: 'studentName',
					key: 'studentName'
				},
				{
					title: '性别',
					dataIndex: 'gender',
					key: 'gender'
				},
				{
					title: '学籍状态',
					dataIndex: 'studentStatus',
					key: 'studentStatus'
				},
				{
					title: '状态',
					dataIndex: 'status',
					key: 'status'
				},
				{
					title: '住校类型',
					dataIndex: 'residence',
					key: 'residence'
				},
				{
					title: '进离校权限',
					dataIndex: 'permission',
					key: 'permission'
				},
				{
					title: '操作',
					dataIndex: 'operation',
					key: 'operation',
					render: (text, record) => (
						<span>
							<a>数字档案</a>
							<Divider type="vertical" />
							<a>家长设置</a>
							<Divider type="vertical" />
							<a>禁用</a>
							<Divider type="vertical" />
							<a>开启离校</a>
						</span>
					)
				}
			],
			data: [
				{
					key: '1',
					class: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					gender: '男',
					studentStatus: '注册',
					status: '启用',
					residence: '住读生',
					permission: '已关闭'
				},
				{
					key: '2',
					class: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					gender: '男',
					studentStatus: '注册',
					status: '启用',
					residence: '住读生',
					permission: '已关闭'
				},
				{
					key: '3',
					class: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					gender: '男',
					studentStatus: '注册',
					status: '启用',
					residence: '住读生',
					permission: '已关闭'
				},
				{
					key: '4',
					class: '五年级(3)班',
					studentID: 1123213,
					studentName: 'chuze',
					gender: '男',
					studentStatus: '注册',
					status: '启用',
					residence: '住读生',
					permission: '已关闭'
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
	render() {
		return (
			<div className="student_charge_container">
				<WrapedOperateForm showModal={this.showModal} />
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					width={1000}
					footer={null}
					title="添加学生"
					bodyStyle={{ overflow: 'scroll', maxHeight: '580px' }}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<AddStudetFormForm />
				</Modal>
			</div>
		);
	}
}

export default studentsCharge;

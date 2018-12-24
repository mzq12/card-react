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
						<FormItem label="课程编码">{getFieldDecorator('courseID')(<Input />)}</FormItem>
					</Col>
					<Col span={5}>
						<FormItem label="课程名称">{getFieldDecorator('courseName')(<Input />)}</FormItem>
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
								添加课程
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
// 添加课程
class AddCourseForm extends Component {
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
								<FormItem label="课程编码">
									{getFieldDecorator('courseID', {
										rules: [ { required: true, message: '学号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="讲课时长">{getFieldDecorator('courseDuration')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程性质">
									{getFieldDecorator('courseStatus', { initialValue: '请选择' })(
										<Select onChange={this.handleChange}>
											<Option value="11">必修课</Option>
											<Option value="12">选修课</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row>
							<Col span={24}>
								<FormItem label="课程名称">
									{getFieldDecorator('courseName', {
										rules: [ { required: true, message: '名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="实验学时">{getFieldDecorator('testDuration')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程类别">
									{getFieldDecorator('courseCate')(
										<Select
											onChange={this.handleChange}
											onFocus={this.handleFocus}
											onBlur={this.handleBlur}
										>
											<Option value="学科课程">学科课程</Option>
											<Option value="综合课程">综合课程</Option>
											<Option value="活动课程">活动课程</Option>
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
// 编辑课程
class EditCourseForm extends Component {
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
								<FormItem label="课程编码">
									{getFieldDecorator('courseID', {
										rules: [ { required: true, message: '学号必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="讲课时长">{getFieldDecorator('courseDuration')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程性质">
									{getFieldDecorator('courseStatus', { initialValue: '请选择' })(
										<Select onChange={this.handleChange}>
											<Option value="11">必修课</Option>
											<Option value="12">选修课</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row>
							<Col span={24}>
								<FormItem label="课程名称">
									{getFieldDecorator('courseName', {
										rules: [ { required: true, message: '名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="实验学时">{getFieldDecorator('testDuration')(<Input />)}</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程类别">
									{getFieldDecorator('courseCate')(
										<Select
											onChange={this.handleChange}
											onFocus={this.handleFocus}
											onBlur={this.handleBlur}
										>
											<Option value="学科课程">学科课程</Option>
											<Option value="综合课程">综合课程</Option>
											<Option value="活动课程">活动课程</Option>
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
const WrapedAddStudetForm = Form.create()(AddCourseForm);
const WrapedEditCourseForm = Form.create()(EditCourseForm);

class courseCharge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			visibleType: 'Add',
			columns: [
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
					title: '课程性质',
					dataIndex: 'courseNature',
					key: 'courseNature'
				},
				{
					title: '操作',
					dataIndex: 'operation',
					key: 'operation',
					render: (text, record) => (
						<span>
							<a
								onClick={() => {
									this.handleVisibleType('Edit');
									this.showModal();
								}}
							>
								编辑
							</a>
						</span>
					)
				}
			],
			data: [
				{
					key: '1',
					courseID: '09',
					courseName: '音乐',
					courseNature: '必修'
				},
				{
					key: '2',
					courseID: '09',
					courseName: '音乐',
					courseNature: '必修'
				},
				{
					key: '3',
					courseID: '09',
					courseName: '音乐',
					courseNature: '必修'
				},
				{
					key: '4',
					courseID: '09',
					courseName: '音乐',
					courseNature: '必修'
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
	handleVisibleType = (type) => {
		this.setState({
			visibleType: type
		});
	};
	render() {
		return (
			<div className="student_charge_container">
				<WrapedOperateForm
					showModal={() => {
						this.handleVisibleType('Add');
						this.showModal();
					}}
				/>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal
					width={1000}
					footer={null}
					title={this.state.visibleType === 'Add' ? '添加课程' : '编辑课程'}
					bodyStyle={{ overflow: 'scroll', maxHeight: '580px' }}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					{this.state.visibleType === 'Add' ? <WrapedAddStudetForm /> : <WrapedEditCourseForm />}
				</Modal>
			</div>
		);
	}
}

export default courseCharge;

import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select, Row, Col, message, Icon } from 'antd';
import http from '../../config/axios.config';
const FormItem = Form.Item;
const Option = Select.Option;
const { TextArea } = Input;
const modalContext = React.createContext();
const Provider = modalContext.Provider;
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
// 添加课程
class AddCourseForm extends Component {
	static contextType = modalContext;
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
					url: '/aj/subjects/addsubject'
				}).then((res) => {
					if (res.data.code === 10000) {
						message.info('添加成功');
						this.context.fetchSubjects(1, 10);
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
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="课程编码">
									{getFieldDecorator('subject_id', {
										rules: [ { required: true, message: '课程编码必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程性质">
									{getFieldDecorator('subject_type', { initialValue: '请选择' })(
										<Select onChange={this.handleChange}>
											<Option value="1">必修课</Option>
											<Option value="2">选修课</Option>
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
									{getFieldDecorator('subject', {
										rules: [ { required: true, message: '课程名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<FormItem label="添加备注">{getFieldDecorator('comment')(<TextArea />)}</FormItem>
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
	static contextType = modalContext;
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
					url: '/aj/subjects/editsubject'
				}).then((res) => {
					if (res.data.code === 10000) {
						message.info('修改成功');
						console.log(this.context.currentPage);
						this.context.fetchSubjects(this.context.currentPage, 10);
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
		const record = this.context.editRow;
		return (
			<Form layout="vertical">
				<Row>
					<Col span={11} style={{ marginRight: '42px' }}>
						<Row>
							<Col span={24}>
								<FormItem label="课程编码">
									{getFieldDecorator('subject_id', {
										initialValue: record.subject_id,
										rules: [ { required: true, message: '课程编码必填' } ]
									})(<Input disabled />)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<FormItem label="课程性质">
									{getFieldDecorator('subject_type')(
										<Select onChange={this.handleChange} placeholder="请选择课程性质">
											<Option value="1">必修课</Option>
											<Option value="2">选修课</Option>
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
									{getFieldDecorator('subject', {
										initialValue: record.subject,
										rules: [ { required: true, message: '课程名称必填' } ]
									})(<Input />)}
								</FormItem>
							</Col>
						</Row>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<FormItem label="添加备注">
							{getFieldDecorator('comment', { initialValue: record.comment })(<TextArea />)}
						</FormItem>
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
	state = {
		visible: false,
		visibleType: 'Add',
		editRow: null,
		columns: [
			{
				title: '课程编码',
				dataIndex: 'subject_id',
				key: 'subject_id'
			},
			{
				title: '课程名称',
				dataIndex: 'subject',
				key: 'subject'
			},
			{
				title: '课程性质',
				dataIndex: 'subject_type',
				key: 'subject_type',
				render: (text) => {
					if (text === 1) {
						return '必修';
					} else if (text === 2) {
						return '选修';
					} else {
						return '其他';
					}
				}
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
									editRow: record
								});
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
		data: [],
		selectedRowKeys: [],
		currentPage: 1
	};
	componentDidMount() {
		this.fetchSubjects(1, 10);
	}
	fetchSubjects = (page, count) => {
		http({
			method: 'post',
			url: '/aj/subjects/getsubjects',
			data: {
				page: page,
				count: count
			}
		}).then((res) => {
			if (res.data.code === 10000) {
				let data = res.data.data.subjects.map((item) => {
					item.key = item.subject_id;
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
	batchDelete = () => {
		http({
			method: 'post',
			data: {
				subjects: JSON.stringify(this.state.selectedRowKeys)
			},
			url: '/aj/subjects/batchdelete'
		}).then((res) => {
			if (res.data.code === 10000) {
				message.info('删除成功');
				this.handleCancel();
				this.fetchSubjects(1, 10);
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
	handleVisibleType = (type) => {
		this.setState({
			visibleType: type
		});
	};
	rowSelection = {
		onChange: (selectedRowKeys) => {
			this.setState({
				selectedRowKeys: selectedRowKeys
			});
		}
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
				<Table
					columns={this.state.columns}
					dataSource={this.state.data}
					pagination={{
						size: 10,
						total: this.state.total_count,
						onChange: (page) => {
							this.setState({
								currentPage: page
							});
							this.fetchSubjects(page, 10);
						}
					}}
					rowSelection={this.rowSelection}
				/>
				<Button onClick={this.batchDelete}>批量删除</Button>
				<Modal
					width={1000}
					footer={null}
					title={this.state.visibleType === 'Add' ? '添加课程' : '编辑课程'}
					bodyStyle={{ overflow: 'scroll', maxHeight: '580px' }}
					visible={this.state.visible}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<Provider
						value={{
							cancelModal: this.handleCancel,
							fetchSubjects: this.fetchSubjects,
							editRow: this.state.editRow,
							currentPage: this.state.currentPage
						}}
					>
						{this.state.visibleType === 'Add' ? <WrapedAddStudetForm /> : <WrapedEditCourseForm />}
					</Provider>
				</Modal>
			</div>
		);
	}
}

export default courseCharge;

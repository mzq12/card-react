import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select } from 'antd';
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
				<FormItem label="学生班级">
					{getFieldDecorator('学生班级', { initialValue: '1年级1班' })(
						<Select style={{ width: 120 }} onChange={this.handleChange}>
							<Option value="11">1年级1班</Option>
							<Option value="12">1年级2班</Option>
							<Option value="13">1年级3班</Option>
							<Option value="14">1年级4班</Option>
							<Option value="15">1年级5班</Option>
						</Select>
					)}
				</FormItem>
				<FormItem label="学生姓名">{getFieldDecorator('学生姓名')(<Input />)}</FormItem>
				<FormItem label="家长姓名">{getFieldDecorator('家长姓名')(<Input />)}</FormItem>
				<FormItem label="手机号">{getFieldDecorator('手机号')(<Input />)}</FormItem>
				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						确定
					</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrapedOperateForm = Form.create()(OperateForm);
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name
	})
};
class Preregistration extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '班级',
					dataIndex: 'class',
					key: 'class'
				},
				{
					title: '学生姓名',
					dataIndex: 'studentName',
					key: 'studentName'
				},
				{
					title: '家长姓名',
					dataIndex: 'parentName',
					key: 'parentName'
				},
				{
					title: '手机号',
					dataIndex: 'phoneNumber',
					key: 'phoneNumber'
				},
				{
					title: 'APP 账号',
					dataIndex: 'APPaccount',
					key: 'APPaccount'
				},
				{
					title: '家庭关系',
					dataIndex: 'relationship',
					key: 'relationship'
				}
			],
			data: [
				{
					key: '1',
					class: '1年级1班',
					studentName: '卓纳',
					parentName: '伊丽娜',
					phoneNumber: 13634869832,
					APPaccount: 60943,
					relationship: '母亲'
				},
				{
					key: '2',
					class: '1年级1班',
					studentName: '卓纳',
					parentName: '伊丽娜',
					phoneNumber: 13634869832,
					APPaccount: 60943,
					relationship: '母亲'
				},
				{
					key: '3',
					class: '1年级1班',
					studentName: '卓纳',
					parentName: '伊丽娜',
					phoneNumber: 13634869832,
					APPaccount: 60943,
					relationship: '母亲'
				},
				{
					key: '4',
					class: '1年级1班',
					studentName: '卓纳',
					parentName: '伊丽娜',
					phoneNumber: 13634869832,
					APPaccount: 60943,
					relationship: '母亲'
				},
				{
					key: '5',
					class: '1年级1班',
					studentName: '卓纳',
					parentName: '伊丽娜',
					phoneNumber: 13634869832,
					APPaccount: 60943,
					relationship: '母亲'
				}
			]
		};
	}
	render() {
		return (
			<div>
				<WrapedOperateForm />
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={rowSelection} />
			</div>
		);
	}
}

export default Preregistration;

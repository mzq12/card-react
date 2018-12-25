import React, { Component } from 'react';
import { Form, Input, Button, Table, Divider, Modal, Popconfirm, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User', // Column configuration not to be checked
		name: record.name
	})
};

// 添加部门
class AddDepartForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				<FormItem label="部门代码">
					{getFieldDecorator('departIC', {
						rules: [ { required: true, message: '请填写部门代码' } ]
					})(<Input />)}
				</FormItem>
				<FormItem label="部门名称">
					{getFieldDecorator('departName', {
						rules: [ { required: true, message: '请填写部门名称' } ]
					})(<Input />)}
				</FormItem>
				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						确定
					</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrapedAddDepartForm = Form.create()(AddDepartForm);
// 编辑部门
class EditDepartFrom extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log(values);
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form>
				<FormItem label="部门代码">
					{getFieldDecorator('departIC', {
						rules: [ { required: true, message: '请填写部门代码' } ]
					})(<Input />)}
				</FormItem>
				<FormItem label="部门名称">
					{getFieldDecorator('departName', {
						rules: [ { required: true, message: '请填写部门名称' } ]
					})(<Input />)}
				</FormItem>

				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						确定
					</Button>
				</FormItem>
			</Form>
		);
	}
}
const WrapedEditDepartForm = Form.create()(EditDepartFrom);

// 选择上级部门
class SelectSuperiorDepart extends Component {
	handleChange = (value) => {
		console.log(value);
	};
	render() {
		return (
			<Form layout="inline">
				<FormItem label="上级部门">
					<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="disabled" disabled>
							Disabled
						</Option>
						<Option value="Yiminghe">yiminghe</Option>
					</Select>
				</FormItem>
				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						确定
					</Button>
				</FormItem>
			</Form>
		);
	}
}

// 选择管理老师

class SelectTeacher extends Component {
	handleChange = (value) => {
		console.log(value);
	};
	render() {
		return (
			<Form layout="inline">
				<FormItem label="管理者">
					<Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
						<Option value="jack">Jack</Option>
						<Option value="lucy">Lucy</Option>
						<Option value="disabled" disabled>
							Disabled
						</Option>
						<Option value="Yiminghe">yiminghe</Option>
					</Select>
				</FormItem>
				<FormItem>
					<Button type="primary" onClick={this.handleSubmit}>
						确定
					</Button>
				</FormItem>
			</Form>
		);
	}
}

// modal content

class ModalContent extends Component {
	render() {
		switch (this.props.type) {
			case 'WrapedAddDepartForm':
				return <WrapedAddDepartForm />;
			case 'WrapedEditDepartForm':
				return <WrapedEditDepartForm />;
			case 'SelectSuperiorDepart':
				return <SelectSuperiorDepart />;
			case 'SelectTeacher':
				return <SelectTeacher />;
			default:
				return <WrapedAddDepartForm />;
		}
	}
}
class Appointmentlist extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '部门代码',
					dataIndex: 'departIC',
					key: 'departIC',
					render: (text) => <a href="javascript:;">{text}</a>
				},
				{
					title: '部门名称',
					dataIndex: 'departName',
					key: 'departName'
				},
				{
					title: '负责人名称',
					dataIndex: 'chargePerson',
					key: 'chargePerson'
				},
				{
					title: '上级部门',
					key: 'superior',
					dataIndex: 'superior'
				},
				{
					title: 'Action',
					key: 'action',
					render: (text, record) => (
						<span>
							<a onClick={() => this.handleModalContent('WrapedEditDepartForm')}>编辑</a>
							<Divider type="vertical" />
							<a onClick={() => this.handleModalContent('SelectSuperiorDepart')}>选择上级部门</a>
							<Divider type="vertical" />
							<a onClick={() => this.handleModalContent('SelectTeacher')}>选择管理老师</a>
							<Divider type="vertical" />
							<Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record.key)}>
								<a>删除</a>
							</Popconfirm>
						</span>
					)
				}
			],
			data: [
				{
					key: '1',
					departIC: 'John Brown',
					departName: '教学部',
					chargePerson: 'lendel',
					superior: '德育处'
				},
				{
					key: '2',
					departIC: 'Jim Green',
					departName: '教学部',
					chargePerson: 'lendel',
					superior: '德育处'
				},
				{
					key: '3',
					departIC: 'Joe Black',
					departName: '教学部',
					chargePerson: 'lendel',
					superior: '德育处'
				},
				{
					key: '4',
					departIC: 'marin',
					departName: '电子竞技部',
					chargePerson: 'lendel',
					superior: '游戏部'
				},
				{
					key: '5',
					departIC: 'Clid',
					departName: 'lck',
					chargePerson: 'lendel',
					superior: '测试部'
				}
			],
			visible: false,
			modalContent: 'WrapedAddDepartForm'
		};
	}
	handleDelete = (key) => {
		const dataSource = [ ...this.state.data ];
		this.setState({ data: dataSource.filter((item) => item.key !== key) });
	};

	/* handleAdd = () => {
		const { count, dataSource } = this.state;
		const newData = {
			key: count,
			name: `Edward King ${count}`,
			age: 32,
			address: `London, Park Lane no. ${count}`
		};
		this.setState({
			dataSource: [ ...dataSource, newData ],
			count: count + 1
		});
	}; */
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleModalContent = (content) => {
		this.setState({
			modalContent: content
		});
		this.showModal();
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
	render() {
		return (
			<div className="depart_charge_container">
				<Form layout="inline">
					<FormItem label="部门代码">
						<Input />
					</FormItem>
					<FormItem label="部门名称">
						<Input />
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
					<FormItem>
						<Button type="primary" onClick={() => this.handleModalContent('WrapedAddDepartForm')}>
							添加部门
						</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={rowSelection} />
				<Modal
					footer={null}
					bodyStyle={{ minHeight: '300px' }}
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

export default Appointmentlist;

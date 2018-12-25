import React, { Component } from 'react';
import { Form, Input, Button, Table } from 'antd';
const FormItem = Form.Item;
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
export default class StudentTable extends Component {
	state = {
		columns: [
			{ title: '班级', dataIndex: 'class', key: 'class' },
			{ title: '学号', dataIndex: 'studentID', key: 'studentID' },
			{ title: '姓名', dataIndex: 'name', key: 'name' },
			{ title: '性别', dataIndex: 'gender', key: 'gender' },
			{ title: '年级', dataIndex: 'grade', key: 'grade' },
			{ title: '学籍状态', dataIndex: 'status', key: 'status' }
		],
		data: [
			{
				key: '1',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			},
			{
				key: '2',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			},
			{
				key: '3',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			},
			{
				key: '4',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			},
			{
				key: '5',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			},
			{
				key: '6',
				class: '五年级1班',
				studentID: 111,
				name: '本尼迪克特 康伯巴奇',
				gender: '男',
				grade: '2014',
				status: '注册'
			}
		]
	};
	render() {
		return (
			<div>
				<Form layout="inline">
					<FormItem label="学号">
						<Input />
					</FormItem>
					<FormItem label="姓名">
						<Input />
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} rowSelection={rowSelection} />
				<Button type="primary">确认选择</Button>
			</div>
		);
	}
}

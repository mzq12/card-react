import React, { Component } from 'react';
import { Form, Input, Button, Table, Modal, Select, DatePicker, Divider, Popconfirm, Switch, Tree } from 'antd';
import PicturesWall from '../../components/picturesWall.jsx';
const FormItem = Form.Item;
const Option = Select.Option;
const TextArea = Input.TextArea;
const { TreeNode } = Tree;
class Detail extends Component {
	render() {
		return (
			<Form layout="horizontal">
				<FormItem label="公告范围">
					<Select placeholder="选择公告范围" value="1" disabled>
						<Option value="1">班级家长</Option>
						<Option value="2">全体老师</Option>
						<Option value="3">全体老师和家长</Option>
					</Select>
				</FormItem>
				<FormItem label="接收人">
					<Tree
						checkable
						onSelect={this.onSelect}
						onCheck={this.onCheck}
						defaultExpandedKeys={[ '0-0-0', '0-0-1' ]}
						defaultSelectedKeys={[ '0-0-0', '0-0-1' ]}
						defaultCheckedKeys={[ '0-0-0', '0-0-1' ]}
					>
						<TreeNode title="初中" key="6-1">
							<TreeNode title="初一" key="0-0-0">
								<TreeNode title="初一1班" key="0-0-0-0" />
								<TreeNode title="初一2班" key="0-0-0-1" />
							</TreeNode>
							<TreeNode title="初二" key="0-0-1">
								<TreeNode title="初二1班" key="0-0-1-0" />
								<TreeNode title="初二2班" key="0-0-2-0" />
							</TreeNode>
						</TreeNode>
					</Tree>
				</FormItem>
				<FormItem label="发布主题">
					<Input value="户外活动" disabled />
				</FormItem>
				<FormItem label="公告内容">
					<TextArea value="阻止户外活动" disabled />
				</FormItem>
				<FormItem label="通知反馈">
					<Switch defaultChecked disabled />
				</FormItem>
				<FormItem label="图片">
					<PicturesWall disabled />
				</FormItem>
				<FormItem label="署名">
					<Input value="汤唯" disabled />
				</FormItem>
			</Form>
		);
	}
}
class AddAnnounce extends Component {
	state = {
		showTarget: false
	};
	handleSelectChange = (checked) => {
		if (checked === '2') {
			this.showTarget();
		} else this.hideTarget();
	};
	onSelect = (selectedKeys, info) => {
		console.log('selected', selectedKeys, info);
	};

	onCheck = (checkedKeys, info) => {
		console.log('onCheck', checkedKeys, info);
	};
	showTarget = () => {
		this.setState({
			showTarget: true
		});
	};
	hideTarget = () => {
		this.setState({
			showTarget: false
		});
	};
	render() {
		return (
			<Form layout="horizontal">
				<FormItem label="公告范围">
					<Select placeholder="选择公告范围" onChange={this.handleSelectChange}>
						<Option value="1">班级家长</Option>
						<Option value="2">全体老师</Option>
						<Option value="3">全体老师和家长</Option>
					</Select>
				</FormItem>
				{this.state.showTarget ? (
					<FormItem>
						<Tree checkable onSelect={this.onSelect} onCheck={this.onCheck}>
							<TreeNode title="初中" key="6-1">
								<TreeNode title="初一" key="0-0-0">
									<TreeNode title="初一1班" key="0-0-0-0" />
									<TreeNode title="初一2班" key="0-0-0-1" />
								</TreeNode>
								<TreeNode title="初二" key="0-0-1">
									<TreeNode title="初二1班" key="0-0-1-0" />
									<TreeNode title="初二2班" key="0-0-2-0" />
								</TreeNode>
							</TreeNode>
						</Tree>
					</FormItem>
				) : null}
				<FormItem label="发布主题">
					<Input />
				</FormItem>
				<FormItem label="公告内容">
					<TextArea />
				</FormItem>
				<FormItem label="通知反馈">
					<Switch defaultChecked />
				</FormItem>
				<FormItem label="添加图片">
					<PicturesWall />
				</FormItem>
				<FormItem label="署名">
					<Input />
				</FormItem>
				<FormItem>
					<Button type="primary">发布</Button>
				</FormItem>
			</Form>
		);
	}
}
class announcement extends Component {
	state = {
		visible: false,
		modalContent: 'addAnnounce',
		columns: [
			{ title: '公告发布人', dataIndex: 'publisher', key: 'publisher' },
			{ title: '公告主题', dataIndex: 'theme', key: 'theme' },
			{ title: '公告范围', dataIndex: 'limit', key: 'limit' },
			{ title: '公告时间', dataIndex: 'time', key: 'time' },
			{
				title: '操作',
				dataIndex: 'operation',
				key: 'operatoin',
				render: () => (
					<span>
						<a
							onClick={() => {
								this.setState({
									modalContent: 'detail'
								});
								this.showModal();
							}}
						>
							详情
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
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			},
			{
				key: '2',
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			},
			{
				key: '3',
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			},
			{
				key: '4',
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			},
			{
				key: '5',
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			},
			{
				key: '6',
				publisher: '伊娃格林',
				theme: '放假通知',
				limit: '群组老师',
				time: '2018-12-25 19:09'
			}
		]
	};
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
		return (
			<div>
				<Form layout="inline">
					<FormItem label="开始时间">
						<DatePicker />
					</FormItem>
					<FormItem label="结束时间">
						<DatePicker />
					</FormItem>
					<FormItem label="公告公布人">
						<Input />
					</FormItem>
					<FormItem label="公告主题">
						<Input />
					</FormItem>
					<FormItem>
						<Button type="primary">搜索</Button>
					</FormItem>
					<FormItem>
						<Button
							type="primary"
							onClick={() => {
								this.setState({
									modalContent: 'addAnnounce'
								});
								this.showModal();
							}}
						>
							添加公告
						</Button>
					</FormItem>
				</Form>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal onCancel={this.handleCancel} visible={this.state.visible} footer={null}>
					{this.state.modalContent === 'addAnnounce' ? <AddAnnounce /> : <Detail />}
				</Modal>
			</div>
		);
	}
}

export default announcement;

import React, { Component } from 'react';
import {
	Form,
	Input,
	Button,
	Table,
	Divider,
	Modal,
	Popconfirm,
	Select,
	Row,
	Col,
	DatePicker,
	Collapse,
	Checkbox
} from 'antd';
import PicturesWall from '../../components/picturesWall';
const FormItem = Form.Item;
const Option = Select.Option;
const { RangePicker } = DatePicker;
const Panel = Collapse.Panel;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
// 操作表单
class OperateForm extends Component {
	state = {
		visible: false
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancle = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div>
				<Form layout="inline">
					<Row>
						<Col span={5}>
							<FormItem label="班级">
								{getFieldDecorator('class', { initialValue: '请选择班级' })(
									<Select>
										<Option value="1">一年1班</Option>
										<Option value="2">一年2班</Option>
										<Option value="3">一年3班</Option>
										<Option value="4">一年4班</Option>
									</Select>
								)}
							</FormItem>
						</Col>
						<Col span={5}>
							<FormItem label="课程">
								{getFieldDecorator('course', { initialValue: '请选择课程' })(
									<Select>
										<Option value="1">体育课</Option>
										<Option value="2">体育课</Option>
										<Option value="3">体育课</Option>
										<Option value="4">体育课</Option>
									</Select>
								)}
							</FormItem>
						</Col>
						<Col span={10}>
							<FormItem label="时间范围">
								<RangePicker showTime />
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary">搜索</Button>
							</FormItem>
						</Col>
						<Col span={2}>
							<FormItem>
								<Button type="primary" onClick={this.showModal}>
									添加作业
								</Button>
							</FormItem>
						</Col>
					</Row>
				</Form>
				<Modal visible={this.state.visible} onCancel={this.handleCancle}>
					<AddAssignmentForm />
				</Modal>
			</div>
		);
	}
}
const WrapedOperateForm = Form.create()(OperateForm);
// 添加作业
class AddAssignmentForm extends Component {
	render() {
		const options = [
			{ label: '一年1班', value: '11' },
			{ label: '一年2班', value: '12' },
			{ label: '一年3班', value: '13' },
			{ label: '一年4班', value: '14' },
			{ label: '一年5班', value: '15' },
			{ label: '一年6班', value: '16' },
			{ label: '一年7班', value: '17' },
			{ label: '一年8班', value: '18' },
			{ label: '一年9班', value: '19' }
		];
		return (
			<div>
				<Collapse defaultActiveKey={[ '1' ]} style={{ marginBottom: 20 }}>
					<Panel header="选择班级" key="1">
						<CheckboxGroup options={options} />
					</Panel>
				</Collapse>
				<Form layout="inline">
					<FormItem label="课程">
						<Select style={{ width: 240 }} placeholder="选择课程">
							<Option value="1">英语</Option>
							<Option value="2">体育</Option>
							<Option value="3">美术</Option>
							<Option value="4">音乐</Option>
						</Select>
					</FormItem>
					<FormItem label="完成时间">
						<DatePicker showTime />
					</FormItem>
					<FormItem label="作业内容">
						<TextArea rows={6} cols={33} />
					</FormItem>
					<FormItem label="导入图片">
						<PicturesWall />
					</FormItem>
				</Form>
			</div>
		);
	}
}

// 数据表格
class AssignmentDetail extends Component {
	render() {
		return (
			<Form>
				<FormItem label="班级">
					<Input disabled={true} value={'高年(2)班'} />
				</FormItem>
				<FormItem label="课程">
					<Input disabled={true} value={'美术'} />
				</FormItem>
				<FormItem label="布置作业老师">
					<Input disabled={true} value={'马龙白兰度'} />
				</FormItem>
				<FormItem label="布置作业时间">
					<Input disabled={true} value={'2018.12.14 12:18'} />
				</FormItem>
				<FormItem label="作业完成时间">
					<Input disabled={true} value={'2018.12.14 13:18'} />
				</FormItem>
				<FormItem label="作业内容">
					<TextArea value={'作业内容: 背诵课文'} disabled={true} />
				</FormItem>
			</Form>
		);
	}
}
class FinishDetail extends Component {
	state = {
		columns: [
			{
				title: '学号',
				dataIndex: 'studentID',
				key: 'studentID'
			},
			{
				title: '姓名',
				dataIndex: 'name',
				key: 'name'
			},
			{
				title: '性别',
				dataIndex: 'gender',
				key: 'gender'
			},
			{
				title: '家长是否查看',
				dataIndex: 'checked',
				key: 'checked'
			},
			{
				title: '完成时间',
				dataIndex: 'finishTime',
				key: 'finishTime'
			},
			{
				title: '老师留言',
				dataIndex: 'teacherComment',
				key: 'teacherComment'
			},
			{
				title: '老师评分',
				dataIndex: 'score',
				ket: 'score'
			},
			{
				title: '家长评分',
				dataIndex: 'parentComment',
				key: 'parentComment'
			}
		],
		data: [
			{
				key: '1',
				studentID: 44562345,
				name: '达芬奇',
				gender: '男',
				checked: '未查看',
				finishTime: '',
				teacherComment: '',
				score: '未评分',
				parentComment: ''
			},
			{
				key: '2',
				studentID: 44562345,
				name: '达芬奇',
				gender: '男',
				checked: '未查看',
				finishTime: '',
				teacherComment: '',
				score: '未评分',
				parentComment: ''
			},
			{
				key: '3',
				studentID: 44562345,
				name: '达芬奇',
				gender: '男',
				checked: '未查看',
				finishTime: '',
				teacherComment: '',
				score: '未评分',
				parentComment: ''
			},
			{
				key: '4',
				studentID: 44562345,
				name: '达芬奇',
				gender: '男',
				checked: '未查看',
				finishTime: '',
				teacherComment: '',
				score: '未评分',
				parentComment: ''
			},
			{
				key: '5',
				studentID: 44562345,
				name: '达芬奇',
				gender: '男',
				checked: '未查看',
				finishTime: '',
				teacherComment: '',
				score: '未评分',
				parentComment: ''
			}
		]
	};
	render() {
		return <Table columns={this.state.columns} dataSource={this.state.data} />;
	}
}
function ModalContent(props) {
	switch (props.type) {
		case 'assignmentDetail':
			return <AssignmentDetail />;
		case 'finishDetail':
			return <FinishDetail />;
		default:
			return <AssignmentDetail />;
	}
}
class DataTable extends Component {
	state = {
		visible: false,
		modalContent: 'assignmentDetail',
		columns: [
			{
				title: '班级名称',
				dataIndex: 'className',
				key: 'className'
			},
			{
				title: '创建时间',
				dataIndex: 'createTime',
				key: 'createTime'
			},
			{
				title: '课程名称',
				dataIndex: 'courseName',
				key: 'courseName'
			},
			{
				title: '布置作业人',
				dataIndex: 'decorater',
				key: 'decorater'
			},
			{
				title: '完成情况',
				dataIndex: 'finishStatus',
				key: 'finishStatus'
			},
			{
				title: '操作',
				dataIndex: 'operation',
				key: 'operation',
				render: () => (
					<span>
						<a onClick={this.showModal}>作业详情</a>
						<Divider type="vertical" />
						<a
							onClick={() => {
								this.setState({
									modalContent: 'finishDetail'
								});
								this.showModal();
							}}
						>
							完成详情
						</a>
						<Divider type="vertical" />
						<Popconfirm title="确认删除?">
							<a>删除作业</a>
						</Popconfirm>
					</span>
				)
			}
		],
		data: [
			{
				key: '1',
				className: '高二(2)班',
				createTime: '2018-12-24 10:02',
				courseName: '体育课',
				decorater: '刘翔',
				finishStatus: '0/67'
			},
			{
				key: '2',
				className: '高二(2)班',
				createTime: '2018-12-24 10:02',
				courseName: '体育课',
				decorater: '刘翔',
				finishStatus: '0/67'
			},
			{
				key: '3',
				className: '高二(2)班',
				createTime: '2018-12-24 10:02',
				courseName: '体育课',
				decorater: '刘翔',
				finishStatus: '0/67'
			},
			{
				key: '4',
				className: '高二(2)班',
				createTime: '2018-12-24 10:02',
				courseName: '体育课',
				decorater: '刘翔',
				finishStatus: '0/67'
			},
			{
				key: '5',
				className: '高二(2)班',
				createTime: '2018-12-24 10:02',
				courseName: '体育课',
				decorater: '刘翔',
				finishStatus: '0/67'
			}
		]
	};
	showModal = () => {
		this.setState({
			visible: true
		});
	};
	handleCancle = () => {
		this.setState({
			visible: false
		});
	};
	render() {
		return (
			<div>
				<Table columns={this.state.columns} dataSource={this.state.data} />
				<Modal visible={this.state.visible} onCancel={this.handleCancle} width={800}>
					<ModalContent type={this.state.modalContent} />
				</Modal>
			</div>
		);
	}
}
class classeAssign extends Component {
	render() {
		return (
			<div className="class_assignment_container">
				<WrapedOperateForm />
				<DataTable />
			</div>
		);
	}
}

export default classeAssign;

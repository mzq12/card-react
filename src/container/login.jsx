import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import LoginStyle from '../static/scss/login.scss';
import store from '../reducers/user.js';
import http from '../config/axios.config.js';
const FormItem = Form.Item;
class Login extends Component {
	componentDidMount() {
		//store.dispatch({ type: 'LOGIN' });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				http({
					method: 'post',
					url: '/aj/account/login',
					data: values
				}).then(function(response) {
					console.log(response);
				});
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className={LoginStyle.login_container}>
				<div className={LoginStyle.slogan}>
					<div className={LoginStyle.logo} />
					<div className={LoginStyle.text}>欢迎来到蓝涟科技</div>
				</div>
				<div className={LoginStyle.login_form_container}>
					<h4>欢迎来到蓝涟科技</h4>
					<Form className={LoginStyle.login_form}>
						<FormItem>
							<label htmlFor="">用户名</label>
							{getFieldDecorator('userName', {
								rules: [ { required: true, message: '请输入用户名!' } ]
							})(<Input />)}
						</FormItem>
						<FormItem>
							<label htmlFor="">密码</label>
							{getFieldDecorator('password', {
								rules: [ { required: true, message: '请输入密码!' } ]
							})(<Input type="password" />)}
						</FormItem>
						<FormItem>
							<a className={LoginStyle.login_form_forgot} href="/">
								忘记密码?
							</a>
							<Button type="primary" onClick={this.handleSubmit} className={LoginStyle.login_form_button}>
								登录
							</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		);
	}
}
const WrappedlLogin = Form.create()(Login);
export default WrappedlLogin;

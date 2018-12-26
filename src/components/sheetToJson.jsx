import React, { Component } from 'react';
import { Button, Icon, message, Upload } from 'antd';
import * as XLSX from 'xlsx';

class Excel extends Component {
	handelCallback = (data) => {
		this.props.parseDone(data);
	};
	onImportExcel = (info) => {
		if (info.file.status === 'done') {
			const file = info.file.originFileObj;
			const fileReader = new FileReader();
			fileReader.readAsBinaryString(file);
			fileReader.onload = (event) => {
				try {
					const { result } = event.target;
					// 以二进制流方式读取得到整份excel表格对象
					const workbook = XLSX.read(result, { type: 'binary' });
					// 存储获取到的数据
					let data = [];
					// 遍历每张工作表进行读取（这里默认只读取第一张表）
					for (const sheet in workbook.Sheets) {
						// esline-disable-next-line
						if (workbook.Sheets.hasOwnProperty(sheet)) {
							// 利用 sheet_to_json 方法将 excel 转成 json 数据
							data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
							// break; // 如果只取第一张表，就取消注释这行
						}
					}
					// 最终获取到并且格式化后的 json 数据
					this.handelCallback(data);
				} catch (e) {
					// 这里可以抛出文件类型错误不正确的相关提示
					message.error('文件类型不正确！');
				}
			};
		}
	};
	render() {
		return (
			<Upload onChange={this.onImportExcel}>
				<Button>
					<Icon type="upload" /> Click to Upload
				</Button>
			</Upload>
		);
	}
}

export default Excel;

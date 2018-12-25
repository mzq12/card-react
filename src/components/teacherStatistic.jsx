import React from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import { Row, Col } from 'antd';
import DataSet from '@antv/data-set';
class Basiccolumn extends React.Component {
	render() {
		const colData = [
			{
				x: '正高级教师',
				sales: 38
			},
			{
				x: '高级教师',
				sales: 52
			},
			{
				x: '一级教师',
				sales: 39
			},
			{
				x: '二级教师',
				sales: 63
			},
			{
				x: '三级教师',
				sales: 83
			},
			{
				x: '其他',
				sales: 12
			}
		];
		const colCols = {
			sales: {
				tickInterval: 20
			}
		};
		const { DataView } = DataSet;
		const data = [
			{
				item: '正高级教师',
				count: 38
			},
			{
				item: '高级教师',
				count: 52
			},
			{
				item: '一级教师',
				count: 39
			},
			{
				item: '二级教师',
				count: 63
			},
			{
				item: '三级教师',
				count: 83
			},
			{
				item: '其他',
				count: 12
			}
		];
		const dv = new DataView();
		dv.source(data).transform({
			type: 'percent',
			field: 'count',
			dimension: 'item',
			as: 'percent'
		});
		const cols = {
			percent: {
				formatter: (val) => {
					val = val * 100 + '%';
					return val;
				}
			}
		};
		return (
			<div style={{ textAlign: 'center', marginTop: '12px', paddingTop: '12px' }}>
				<h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>教师统计</h4>
				<Row>
					<Col span={12}>
						<Chart height={400} data={colData} scale={colCols} forceFit>
							<Axis name="x" />
							<Axis name="sales" />
							<Tooltip
								crosshairs={{
									type: 'y'
								}}
							/>
							<Geom type="interval" position="x*sales" />
						</Chart>
					</Col>
					<Col span={12}>
						<Chart height={400} data={dv} scale={cols} padding={[ 0, 0, 80, 80 ]} forceFit>
							<Coord type="theta" radius={0.75} />
							<Axis name="percent" />
							<Legend position="right" offsetY={-window.innerHeight / 2 + 120} offsetX={-100} />
							<Tooltip
								showTitle={false}
								itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
							/>
							<Geom
								type="intervalStack"
								position="percent"
								color="item"
								tooltip={[
									'item*percent',
									(item, percent) => {
										percent = percent * 100 + '%';
										return {
											name: item,
											value: percent
										};
									}
								]}
								style={{
									lineWidth: 1,
									stroke: '#fff'
								}}
							>
								<Label
									content="percent"
									formatter={(val, item) => {
										return item.point.item + ': ' + val;
									}}
								/>
							</Geom>
						</Chart>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Basiccolumn;

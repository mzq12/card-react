import React from 'react';
import { G2, Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';

class Curved extends React.Component {
	render() {
		const data = [
			{
				time: '07',
				离校学生: 7,
				在校学生: 3
			},
			{
				time: '08',
				离校学生: 6,
				在校学生: 4
			},
			{
				time: '09',
				离校学生: 9,
				在校学生: 5
			},
			{
				time: '10',
				离校学生: 14,
				在校学生: 8
			},
			{
				time: '11',
				离校学生: 18,
				在校学生: 11
			},
			{
				time: '12',
				离校学生: 21,
				在校学生: 15
			},
			{
				time: '13',
				离校学生: 25,
				在校学生: 17
			},
			{
				time: '14',
				离校学生: 26,
				在校学生: 16
			},
			{
				time: '15',
				离校学生: 23,
				在校学生: 14
			},
			{
				time: '16',
				离校学生: 18,
				在校学生: 10
			},
			{
				time: '17',
				离校学生: 13,
				在校学生: 6
			},
			{
				time: '18',
				离校学生: 9,
				在校学生: 4
			}
		];
		const ds = new DataSet();
		const dv = ds.createView().source(data);
		dv.transform({
			type: 'fold',
			fields: [ '离校学生', '在校学生' ],
			// 展开字段集
			key: 'city',
			// key字段
			value: 'person' // value字段
		});
		console.log(dv);
		const cols = {
			month: {
				range: [ 0, 1 ]
			}
		};
		return (
			<div style={{ textAlign: 'center', marginTop: '12px', paddingTop: '12px' }}>
				<h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>到校情况</h4>
				<Chart height={400} data={dv} scale={cols} forceFit>
					<Legend />
					<Axis name="time" />
					<Axis
						name="person"
						label={{
							formatter: (val) => `${val}人`
						}}
					/>
					<Tooltip
						crosshairs={{
							type: 'y'
						}}
					/>
					<Geom type="line" position="time*person" size={2} color={'city'} shape={'smooth'} />
					<Geom
						type="point"
						position="time*person"
						size={4}
						shape={'circle'}
						color={'city'}
						style={{
							stroke: '#fff',
							lineWidth: 1
						}}
					/>
				</Chart>
			</div>
		);
	}
}

export default Curved;

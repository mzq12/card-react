import React, { Component } from 'react';
import { Map, Marker } from 'react-amap';
import { DatePicker, Row, Col } from 'antd';
const { RangePicker } = DatePicker;
const key = '3244dce00578e026737ad7c677cace80';

const Path = (props) => {
	if (props.beginDraw) {
		const map = props.__map__;
		const AMap = window.AMap;
		const Marker = window.AMap.Marker;
		const Polyline = window.AMap.Polyline;
		const poSign = new Marker({
			position: [ 116.478935, 39.997761 ],
			icon: 'https://webapi.amap.com/images/car.png',
			autoRotation: true
		});
		map.add(poSign);
		const historyPath = new Polyline({
			map: map,
			path: props.path,
			offset: AMap.Pixel(-26, -13),
			strokeColor: '#00F6FF',
			strokeWeight: 6
		});
		const passedPolyline = new Polyline({
			map: map,
			strokeColor: '#E3E3E3',
			strokeWeight: 6
		});
		poSign.on('moving', function(e) {
			passedPolyline.setPath(e.passedPath);
		});
		map.setFitView();
		poSign.moveAlong(props.path, 100);
	}
	return null;
};
class Historypath extends Component {
	state = {
		beginDraw: false,
		polylinePath: [
			[ 116.478935, 39.997761 ],
			[ 116.478939, 39.997825 ],
			[ 116.478912, 39.998549 ],
			[ 116.478912, 39.998549 ],
			[ 116.478998, 39.998555 ],
			[ 116.478998, 39.998555 ],
			[ 116.479282, 39.99856 ],
			[ 116.479658, 39.998528 ],
			[ 116.480151, 39.998453 ],
			[ 116.480784, 39.998302 ],
			[ 116.480784, 39.998302 ],
			[ 116.481149, 39.998184 ],
			[ 116.481573, 39.997997 ],
			[ 116.481863, 39.997846 ],
			[ 116.482072, 39.997718 ],
			[ 116.482362, 39.997718 ],
			[ 116.483633, 39.998935 ],
			[ 116.48367, 39.998968 ],
			[ 116.484648, 39.999861 ]
		]
	};
	onChange = (value, dateString) => {
		console.log('Selected Time: ', value);
		console.log('Formatted Selected Time: ', dateString);
	};
	onOk = (value) => {
		console.log('onOk: ', value);
	};
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				beginDraw: true
			});
		}, 1000);
	}
	markerPosition = { longitude: 116.478935, latitude: 39.997761 };

	render() {
		return (
			<div style={{ width: '100%', height: '100%' }}>
				<Row>
					<Col span={12}>
						<RangePicker
							showTime={{ format: 'HH:mm' }}
							format="YYYY-MM-DD HH:mm"
							placeholder={[ '开始时间', '结束时间' ]}
							onChange={this.onChange}
							onOk={this.onOk}
						/>
					</Col>
				</Row>
				<Map amapkey={key}>
					<Path path={this.state.polylinePath} beginDraw={this.state.beginDraw} />
				</Map>
			</div>
		);
	}
}

export default Historypath;

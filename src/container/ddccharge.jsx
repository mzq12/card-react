import React, { Component } from 'react';

// this function takes a component
/* function withSubscription(WrappedComponent, selectData) {
	// return another component
	return class extends Component {
		constructor(props) {
			super(props);
			this.handleChange = this.handleChange.bind(this);
			this.state = {
				data: selectData(DataSource, props)
			};
		}
		componentDidMount() {
			// takes care of the subscription
			DataSource.addChangeListener(this.handleChange);
		}
		componentWillUnmount() {
			DataSource.removeChangeListener(this.handleChange);
		}
		handleChange() {
			this.setState({
				data: selectData(DataSource, this.props)
			});
		}
		render() {
			// renders the wrapped component with the fresh data
			// Notice that we pass through any additional props
			return <WrappedComponent data={this.state.data} {...this.props} />;
		}
	};
} */

class Ddccharge extends Component {
	render() {
		return <div>车辆管理</div>;
	}
}

export default Ddccharge;

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App.jsx';
import Login from './container/login.jsx';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
ReactDOM.render(
	<Router>
		<Switch>
			<Route path="/login" component={Login} />
			<Route path="/" component={App} />
		</Switch>
	</Router>,
	document.getElementById('root')
);

//ReactDOM.render( < App / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

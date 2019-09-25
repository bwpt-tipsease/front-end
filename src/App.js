import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import ServiceWorkerList from './components/serviceWorkers/ServiceWorkerList';
import ServiceWorkerCard from './components/serviceWorkers/ServiceWorkerCard';
import TabNav from './components/tabs/TabNav.js';

import './App.css';

function App() {
	const [ workers, setWorkers ] = useState([]);

	useEffect(() => {
		axios
			.get('https://agile-escarpment-31149.herokuapp.com/api/serviceworkers')
			.then(res => {
				setWorkers(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	console.log('workers', workers);

	return (
		<div className="App">
			{/* These will need to be separated into routes */}
			<SignUp />
			{/* Nav */}
			<nav className="nav">
				<div className="nav-logo">
					<img src="https://bit.ly/2n7dW0i" alt="logo" />
					<p>Tipsease</p>
				</div>
				<div className="nav-links">
					{/* <Link to="/">Login</Link>
					<Link to="/workers">Workers</Link> */}
				</div>
			</nav>
			{/* Routes */}
			<TabNav />
			<Route exact path="/" component={LoginForm} />
			<Route exact path="/workers" render={props => <ServiceWorkerList workers={workers} {...props} />} />
			<Route path="/workers/:id" render={props => <ServiceWorkerCard workers={workers} {...props} />} />
		</div>
	);
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import LoginForm from './components/forms/Login';
import SignUp from './components/forms/SignUp';
import ServiceWorkerList from './components/serviceWorkers/ServiceWorkerList';
import ServiceWorkerCard from './components/serviceWorkers/ServiceWorkerCard';

import './App.css';

function App() {
	const [ workers, setWorkers ] = useState([]);
	useEffect(() => {
		axios
			.get('https://agile-escarpment-31149.herokuapp.com/api/serviceworkers', {
				headers: {
					authorization: localStorage.getItem('jwt')
				}
			})
			.then(res => {
				setWorkers(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="App">
			{/* Nav */}
			<nav className="nav">
				<div className="nav-logo">
					<img src="https://bit.ly/2n7dW0i" alt="logo" />
					<p>Tipsease</p>
				</div>
			</nav>

			{/* Routes */}
			<Route exact path="/" component={LoginForm} />
			<Route exact path="/register" component={SignUp} />
			<Route exact path="/workers" render={props => <ServiceWorkerList workers={workers} {...props} />} />
			<Route path="/workers/:id" render={props => <ServiceWorkerCard workers={workers} {...props} />} />
		</div>
	);
}

export default App;

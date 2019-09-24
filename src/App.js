import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import LoginForm from './components/forms/Login';
import ServiceWorkerList from './components/serviceWorkers/ServiceWorkerList';
import ServiceWorkerCard from './components/serviceWorkers/ServiceWorkerCard';

import './App.css';
import workerData from './data';

function App() {
	const [ workers, setWorker ] = useState(workerData);
	console.log(workers);
	return (
		<div className="App">
			{/* Routes */}
			<Route exact path="/" component={LoginForm} />
			<Route exact path="/workers" render={props => <ServiceWorkerList workers={workers} {...props} />} />
			<Route path="/workers/:id" render={props => <ServiceWorkerCard workers={workers} {...props} />} />
		</div>
	);
}

export default App;

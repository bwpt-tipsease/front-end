import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './components/forms/Login';
import WorkerList from './components/worker/WorkerList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={LoginForm} />
			<Route path="/workers" component={WorkerList} />
		</div>
	);
}

export default App;

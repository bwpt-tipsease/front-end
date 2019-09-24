import React from 'react';
import WorkerList from './components/worker/WorkerList';
import LoginForm from './components/forms/Login';
import './App.css';
import SignUp from './components/forms/SignUp';

function App() {
	return (
		<div className="App">
			{/* These will need to be separated into routes */}
			<WorkerList />
			<LoginForm />
			<SignUp />
		</div>
	);
}

export default App;

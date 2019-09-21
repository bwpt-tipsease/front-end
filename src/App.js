import React from 'react';
import WorkerList from './components/worker/WorkerList';
import LoginForm from './components/Login';
import './App.css';

function App() {
	return (
		<div className="App">
      {/* These will need to be separated into routes */ }
			<WorkerList />
			<LoginForm />
		</div>
	);
}

export default App;

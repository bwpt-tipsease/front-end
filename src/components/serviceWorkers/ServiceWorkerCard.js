import React from 'react';
import Tips from '../forms/Tips'

function ServiceWorkerCard(props) {
	console.log('Card Props', props);

	const worker = props.workers.find(worker => {
		return worker.id === Number(props.match.params.id);
	});

	// console.log(props.match.params.id);
	// console.log(props);
	return (
		<div className="worker-card">
			<img src={worker.avatar} alt="worker" />
			<h1>
				{worker.first_name} {worker.last_name}
			</h1>
			<h3>Job: This is where my (job) will go at (such and such restaurant)</h3>
			<h4>Tagline: "This is where my tagline will go"</h4>
			<h4>Time in job: {worker.id} months</h4>
			<Tips />
		</div>
	);
}

export default ServiceWorkerCard;

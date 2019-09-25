import React from 'react';

function ServiceWorkerCard(props) {
	console.log('Card Props', props);

	const worker = props.workers.find(worker => {
		return worker.id === Number(props.match.params.id);
	});

	return (
		<div className="worker-card">
			<img src="https://fakeimg.pl/300/" alt="worker" />
			<h1>{worker.worker_name}</h1>
			<h3>Job: {worker.description}</h3>
			<h4>Tagline: ????? </h4>
			<h4>Time in job: ?????</h4>
		</div>
	);
}

export default ServiceWorkerCard;

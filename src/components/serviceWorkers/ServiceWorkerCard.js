import React from 'react';

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
			<h4>Tagline: {worker.email}</h4>
			<h4>Time in job: {worker.id} months</h4>
		</div>
	);
}

export default ServiceWorkerCard;

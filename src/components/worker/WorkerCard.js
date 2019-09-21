import React from 'react';

function WorkerCard(props) {
	return (
		<div className="worker-card">
			<img src={props.worker.avatar} />
			<h1>
				{props.worker.first_name} {props.worker.last_name}
			</h1>
			<h4>Tagline: {props.worker.email}</h4>
			<h4>Time in job: {props.worker.id} months</h4>
		</div>
	);
}

export default WorkerCard;

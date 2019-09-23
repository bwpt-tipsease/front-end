import React from 'react';
import { Link } from 'react-router-dom';

function WorkerCard(props) {
	return (
		<Link to={`/worker/${props.worker.id}`}>
			<div className="worker-card">
				<img src={props.worker.avatar} alt="worker" />
				<h1>
					{props.worker.first_name} {props.worker.last_name}
				</h1>
				<h4>Tagline: {props.worker.email}</h4>
				<h4>Time in job: {props.worker.id} months</h4>
			</div>
		</Link>
	);
}

export default WorkerCard;

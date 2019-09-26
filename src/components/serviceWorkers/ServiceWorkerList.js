import React from 'react';
import { Link } from 'react-router-dom';

function ServiceWorkerList(props) {
	console.log('in the List component', props);
	return (
		<div>
			<h1>Select a worker to tip</h1>

			<div className="worker-list">
				{props.workers.map(worker => (
					<Link to={`/workers/${worker.id}`} key={worker.id}>
						<div className="worker-card">
							<img src={worker.photo} alt="worker" className="worker-img" />
							<h1>{worker.worker_name}</h1>
							<h3>Job: {worker.description}</h3>
							<h4>Time in job: {worker.start_date}</h4>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ServiceWorkerList;

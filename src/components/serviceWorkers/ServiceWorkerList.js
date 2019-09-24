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
							<img src={worker.avatar} alt="worker" />
							<h1>
								{worker.first_name} {worker.last_name}
							</h1>
							<h4>Tagline: {worker.email}</h4>
							<h4>Time in job: {worker.id} months</h4>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ServiceWorkerList;

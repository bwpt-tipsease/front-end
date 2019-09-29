import React from 'react';
import { Link } from 'react-router-dom';
import TipButtons from '../../tips/Tips';

function ServiceWorkerCard(props) {
	console.log('Card Props', props);

	const worker = props.workers.find(worker => {
		return worker.id === Number(props.match.params.id);
	});

	return (
		<section className="tips-section">
			<div className="tips-wrapper">
				<div className="tips-worker">
					<img src={worker.photo} alt="worker" className="worker-img" />
					<h1>{worker.worker_name}</h1>
					<h3>{worker.description}</h3>
				</div>
				<div className="tips-component">
					<TipButtons worker={worker.worker_name} workerId={worker.id} />
				</div>
			</div>
			<div className="btn-wrapper">
				<Link to="/workers" className="back-btn">
					Back to workers list ↵
				</Link>
			</div>
		</section>
	);
}

export default ServiceWorkerCard;

import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function ServiceWorkerList(props) {
	console.log('in the List component', props);

	function timeInJob(dateString) {
		const startDate = new Date(dateString.replace(' ', 'T'));
		const now = new Date();
		const [ startYear, startMonth, startDay ] = [
			startDate.getFullYear(),
			startDate.getMonth() + 1,
			startDate.getDate()
		];
		const [ currentYear, currentMonth, currentDay ] = [ now.getFullYear(), now.getMonth() + 1, now.getDate() ];
		const a = moment([ startYear, startMonth, startDay ]);
		const b = moment([ currentYear, currentMonth, currentDay ]);
		const years = b.diff(a, 'year');
		a.add(years, 'years');
		const months = b.diff(a, 'months');
		return `${years} ${years === 1 ? 'year' : 'years'}, ${months} ${months === 1 ? 'month' : 'months'}`;
	}

	return (
		<div>
			<h1>Select a worker to tip</h1>
			<div className="worker-list">
				{props.workers.map(worker => (
					<Link to={`/workers/${worker.id}`} key={worker.id}>
						<div className="worker-card">
							<img src={worker.photo} alt="worker" className="worker-img" />
							<h1>{worker.worker_name}</h1>
							<h3>{worker.description}</h3>
							<h4>Time in job: {timeInJob(worker.start_date)}</h4>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default ServiceWorkerList;

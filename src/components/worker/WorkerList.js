import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WorkerCard from './WorkerCard';

function WorkerList(props) {
	const [ data, setData ] = useState([]);

	useEffect(() => {
		axios
			.get('https://reqres.in/api/users')
			.then(res => {
				setData(res.data.data);
				console.log('data', res.data.data);
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="worker-list">
			<div className="worker-list">
				{data.map(worker => {
					return <WorkerCard />;
				})}
			</div>
		</div>
	);
}

export default WorkerList;

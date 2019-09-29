import React, { useState } from 'react';
import Axios from 'axios';
import TipDisplay from './TipDisplay';

const TipButtons = props => {
	const [ tips, setTips ] = useState(0);
	const [ message, setMessage ] = useState(null);

	const sendTip = () => {
		if (!tips) return;
		Axios.put(
			`https://agile-escarpment-31149.herokuapp.com/api/serviceworkers/balance/${props.workerId}`,
			{
				tip: tips
			},
			{
				headers: {
					authorization: localStorage.getItem('jwt')
				}
			}
		)
			.then(res => setMessage(res.data.success))
			.catch(error => console.log(error));
	};

	return (
		<div>
			{message ? (
				<h1 className="tip-success">
					<span role="img" aria-label="success">
						✅
					</span>{' '}
					{props.worker}'s balance succesfully updated
				</h1>
			) : (
				<h1>Give a tip to {props.worker}</h1>
			)}
			<TipDisplay tipCount={tips} />
			<div className="tip-btns">
				<button onClick={() => setTips(1)}>$1</button>
				<button onClick={() => setTips(5)}>$5</button>
				<button onClick={() => setTips(10)}>$10</button>
				<button className="confirm-tip" onClick={sendTip}>
					Confirm Tip
				</button>
			</div>
		</div>
	);
};

export default TipButtons;

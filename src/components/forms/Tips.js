import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Tipbuttons = (props) => {
	const [ tips, setTips ] = useState(0);
	const [ message, setMessage ] = useState(null);

	const sendTip = () => {
		if (!tips) return;
		console.log('test');
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
        ).then( res => setMessage (res.data.success))
        .catch( error => console.log(error)); 
	};

	return (
		<div>
			<button className="$1tip" onClick={() => setTips(1)}>
				$1
			</button>
			<button className="$5tip" onClick={() => setTips(5)}>
				$5
			</button>
			<button className="$10tip" onClick={() => setTips(10)}>
				$10
			</button>

			<button className="confirmtip" onClick={sendTip} > Confirm Tip </button>

			{message ? <p>{message}</p> : null}
		</div>
	);
};

export default Tipbuttons;

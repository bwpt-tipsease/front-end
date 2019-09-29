import React from 'react';

const TipDisplay = props => {
	const { tipCount } = props;
	return (
		<section className="tip-display">
			<p className="tip-count">${tipCount}</p>
		</section>
	);
};

export default TipDisplay;

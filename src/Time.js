import moment from 'moment';

function TimeInJob(dateString) {
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
	console.log(years);
	a.add(years, 'years');
	const months = b.diff(a, 'months');
	return `${years} ${years === 1 ? 'year' : 'years'}, ${months} ${months === 1 ? 'month' : 'months'}`;
}

export default TimeInJob;

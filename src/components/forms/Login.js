import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';
import TabNav from '../tabs/TabNav.js';

const LoginForm = ({ errors, touched, status, resetForm }) => {
	// console.log('status', status);
	const [ users, setUsers ] = useState([]);

	useEffect(
		() => {
			if (status) {
				setUsers(prevUsers => [ ...prevUsers, status ]);
			}
		},
		[ status ]
	);

	return (
		<div>
			{/* <h1>Login</h1> */}
			<TabNav />
			<Form>
				{touched.email && errors.email && <p className="error">{errors.email}</p>}
				<Field type="email" name="email" placeholder="Email" />

				{touched.password && errors.password && <p className="error">{errors.password}</p>}
				<Field type="password" name="password" placeholder="Password" autoComplete="" />
				<button type="submit">Submit</button>
			</Form>

			{users.map((user, index) => (
				<div key={index} className="user-info">
					<p>Email: {user.email}</p>
				</div>
			))}
		</div>
	);
};

export default withFormik({
	mapPropsToValues: props => {
		return {
			email: props.email || '',
			password: props.password || ''
		};
	},
	validationSchema: yup.object().shape({
		email: yup.string().email().required('* Email is required'),
		password: yup.string().min(8, '* Password must be 8 characters').required('* Password is required')
	}),
	handleSubmit: (values, { props, setStatus, resetForm }) => {
		console.log('values', values);

		axios
			.post('https://agile-escarpment-31149.herokuapp.com/api/auth/login', values)
			.then(response => {
				setStatus(response.data);
				localStorage.setItem('jwt', response.data.token);
				props.history.push('/workers');
			})
			.catch(error => console.log(error));

		resetForm();
	}
})(LoginForm);

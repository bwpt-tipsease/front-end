import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

const LoginForm = ({ errors, touched, status, resetForm }) => {
	// console.log('status', status);
	const [ users, setUsers ] = useState([]);

	useEffect(
		() => {
			if (status) {
				// sets users stored in state to the status - which is response.data
				setUsers([ ...users, status ]);
			}
		},
		[ status ]
	);

	return (
		<div>
			<h1>Login</h1>
			<Form>
				{touched.email && errors.email && <p className="error">{errors.email}</p>}
				<Field type="email" name="email" placeholder="Email" />

				{touched.password && errors.password && <p className="error">{errors.password}</p>}
				<Field type="password" name="password" placeholder="Password" autocomplete="" />
				<button type="submit">Submit</button>
			</Form>

			{users.map((user, index) =>
				// <div key={index} className="user-info">
				// 	<p>Email: {user.email}</p>
				// </div>
				console.log('user', user)
			)}
		</div>
	);
};

export default withFormik({
	mapPropsToValues: props => {
		return {
			email: props.email,
			password: props.password
		};
	},
	validationSchema: yup.object().shape({
		email: yup.string().email().required('* Email is required'),
		password: yup.string().min(8, '* Password must be 8 characters').required('* Password is required')
	}),
	handleSubmit: (values, { setStatus }) => {
		console.log('values', values);

		axios
			.post('https://reqres.in/api/users', values)
			.then(response => {
				setStatus(response.data);
			})
			.catch(error => console.log(error));
	}
})(LoginForm);
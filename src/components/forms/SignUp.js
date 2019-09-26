import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

const SignUpForm = ({ errors, touched, status, resetForm }) => {
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
			<Form>
				{touched.username && errors.username && <p className="error">{errors.username}</p>}
				<Field type="text" name="username" placeholder="Username" />

				{touched.email && errors.email && <p className="error">{errors.email}</p>}
				<Field type="email" name="email" placeholder="Email" />

				{touched.password && errors.password && <p className="error">{errors.password}</p>}
				<Field type="password" name="password" placeholder="Password" autoComplete="" />

				<button type="submit">Submit</button>
			</Form>

			{/* {users.map((user, index) => (
				<div key={index} className="user-info">
					<p>Email: {user.email}</p>
				</div>
			))} */}
		</div>
	);
};

export default withFormik({
	mapPropsToValues: props => {
		return {
			username: props.username || '',
			email: props.email || '',
			password: props.password || ''
		};
	},
	validationSchema: yup.object().shape({
		email: yup.string().email().required('* Email is required'),
		password: yup.string().min(8, '* Password must be 8 characters').required('* Password is required'),
		username: yup.string().min(6, '* Username must contain 6 charaters').required('* Username is required')
	}),
	handleSubmit: (values, { props, setStatus, resetForm }) => {
		console.log('values', values);

		axios
			.post('https://reqres.in/api/users', values)
			.then(response => {
				setStatus(response.data);
				props.history.push('/workers');
			})
			.catch(error => console.log(error));

		resetForm();
	}
})(SignUpForm);

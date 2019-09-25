import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

const SignUpForm = ({ errors, touched, status, resetForm }) => {
	// console.log('status', status);
	const [ users, setUsers ] = useState([]);

	useEffect(
		() => {
			if (status) {
				// sets users stored in state to the status - which is response.data
				setUsers((prevUsers) => [ ...prevUsers, status ]);
			}
		},
		[ status ]
	);

	return (

		
		<div>
			<h1>Sign Up</h1>
			<Form>
				{touched.username && errors.username && <p className="error">{errors.username}</p>}
				<Field type="text" name="username" placeholder="User Name" />

				{touched.email && errors.email && <p className="error">{errors.email}</p>}
				<Field type="email" name="email" placeholder="Email" />

				{touched.password && errors.password && <p className="error">{errors.password}</p>}
				<Field type="password" name="password" placeholder="Password" autoComplete="" />

				{touched.confirmpassword && errors.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
				<Field type="password" name="confirmpassword" placeholder="Confirm Password" autoComplete="" />

				{touched.creditcardnumber && errors.creditcardnumber && <p className="error">{errors.creditcardnumber}</p>}
				<Field type="number" name="creditcardnumber" placeholder="Credti Card Number" autoComplete="" />

 				{touched.expdate && errors.expdate && <p className="error">{errors.expdate}</p>}
				<Field type="number" name="expdate" placeholder="Expiration Date" autoComplete="" />
				
				{touched.cvcnumbers && errors.cvcnumbers && <p className="error">{errors.cvcnumbers}</p>}
				<Field type="number" name="cvcnumbers" placeholder="CVC Numbers" autoComplete="" />

			<h2> Billing Address </h2>

				{touched.firstname && errors.firstname && <p className="error">{errors.firstname}</p>}
				<Field type="text" name="firstname" placeholder="First Name" autoComplete="" />

				{touched.lastname && errors.lastname && <p className="error">{errors.lastname}</p>}
				<Field type="text" name="lastname" placeholder="Last Name" autoComplete="" />

				{touched.streetaddress && errors.streetaddress && <p className="error">{errors.streetaddress}</p>}
				<Field type="text" name="streetaddress" placeholder="Street Address" autoComplete="" />

				{touched.zipcode && errors.zipcode && <p className="error">{errors.zipcode}</p>}
				<Field type="number" name="zipcode" placeholder="Zip Code" autoComplete="" />


				<button type="submit">Submit</button>
			</Form>

			{users.map(
				(user, index) => (
					<div key={index} className="user-info">
						<p>Email: {user.email}</p>
					</div>
				)
				// console.log('user', user)
			)}
		</div>
	);
};

export default withFormik({
	mapPropsToValues: (props) => {
		return {
			firstname: props.firstname || '',
			lastname: props.lastname || '',
			email: props.email || '',
			password: props.password || ''
		};
	},
	validationSchema: yup.object().shape({
		email: yup.string().email().required('* Email is required'),
		password: yup.string().min(8, '* Password must be 8 characters').required('* Password is required'),
		username: yup.string().min(6, '* Username must contain 6 charaters').required('* Username is required')
	}),
	handleSubmit: (values, { setStatus, resetForm }) => {
		console.log('values', values);

		axios
			.post('https://reqres.in/api/users', values)
			.then((response) => {
				setStatus(response.data);
			})
			.catch((error) => console.log(error));

		resetForm();
	}
})(SignUpForm);

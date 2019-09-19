import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as yup from 'yup';

const LoginForm = props => {
	return (
		<Form>
			<Field type="email" name="email" placeholder="email" />
			<Field type="password" name="password" placeholder="password" />
			<button type="submit">Submit</button>
		</Form>
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
	handleSubmit: values => {
		console.log(values);
	}
})(LoginForm);

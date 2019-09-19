import React from 'react';
import { withFormik, Field, Form } from 'formik';

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
	handleSubmit: values => {
		console.log(values);
	}
})(LoginForm);

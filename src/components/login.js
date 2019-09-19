import React from 'react';
import { withFormik } from 'formik';

const LoginForm = props => {
	return (
		<form>
			<input type="email" name="email" placeholder="email" />
			<input type="password" name="password" placeholder="password" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default withFormik()(LoginForm);

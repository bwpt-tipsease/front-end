import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = props => <NavLink exact {...props} activeClassName="active" />;

const createLabel = (iconName, labelText) => (
	<span>
		<Icon name={iconName} />
		{labelText}
	</span>
);

const LoginLabel = createLabel('login', 'Login');
const RegisterLabel = createLabel('login', 'Register');

const panes = [
	{ menuItem: <Menu.Item key="login" as={Nav} to={`/`} content={LoginLabel} /> },
	{ menuItem: <Menu.Item key="register" as={Nav} to={`/`} content={RegisterLabel} /> }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;

export default TabNav;

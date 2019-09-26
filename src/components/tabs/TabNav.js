import React from 'react';
import { Tab, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = props => <NavLink exact {...props} activeClassName="isActive" className="tab" />;

const createLabel = labelText => <span>{labelText}</span>;
const LoginLabel = createLabel('Login');
const RegisterLabel = createLabel('Register');

const panes = [
	{ menuItem: <Menu.Item key="login" as={Nav} to={`/`} content={LoginLabel} /> },
	{ menuItem: <Menu.Item key="register" as={Nav} to={`/register`} content={RegisterLabel} /> }
];

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} className="tabs" />;

export default TabNav;

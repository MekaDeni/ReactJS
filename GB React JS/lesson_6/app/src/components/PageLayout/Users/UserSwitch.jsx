import React from "react";
import { Switch, Route } from "react-router-dom";

import Users from './Users.jsx';
import UsersComment from './UsersComment.jsx';

export default () => (
	<Switch>
		<Route exact path={'/users'} component={Users} />
		<Route path={'/users/:commentName'} component={UsersComment}/>
	</Switch>
);
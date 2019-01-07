import React, { PureComponent } from 'react';

const LinkItem = props => (
	<li>
		<a onClick={props.func} href={props.link}>{props.label}</a>
	</li>
);

export default LinkItem;
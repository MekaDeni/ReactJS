import React, { PureComponent} from 'react';

const UserLink = props => (
	<div className='userLink'>
		<a onClick={props.onClick} href={props.link}>{props.name}</a> пишет.
	</div>
)

export default UserLink;
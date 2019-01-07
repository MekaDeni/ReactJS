import React, { PureComponent } from "react";

const Comment = props => (
	<div className='blogComment'>
		<p className='name'>{props.name}</p>
		<p className='comment'>{props.comment}</p>
		<hr/>
	</div>
);

export default Comment;
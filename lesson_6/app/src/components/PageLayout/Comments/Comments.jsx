import React, { Component } from "react";
import "./Comments.css";

import Comment from './Comment.jsx'

class Comments extends Component {
	usersComments = [
		{
			name: 'Deni',
			comment: 'Вроде норм делаю'
		},
		{
			name: 'Alex',
			comment: 'Вроде норм делаешь'
		},
		{
			name: 'Lena',
			comment: 'Вроде норм делаете'
		},
	];
	
	render() {
		return (
			<div className='commentsBlog'>
				{this.usersComments.map((usersComments, index) => {
					return <Comment
						key = {index}
						name = {usersComments.name}
						comment = {usersComments.comment}
					/>
				})}
			</div>
		);
	}
}

export default Comments;
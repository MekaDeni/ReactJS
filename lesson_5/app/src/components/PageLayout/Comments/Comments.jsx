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

	state = {
		stateComments: false,
		stateUsersComments: false
	}

	componentDidMount() {
		this.setState({
			stateComments: true,
			stateUsersComments: true
		})
	}
	
	render() {
		this.state.stateComments = this.props.funcUp;
		if(this.state.stateComments) {
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
		} else {
			return false;
		}
	}
}

export default Comments;
import React, { Component } from 'react';
import './Users.css'

import UserLink from './UserLink.jsx';

class Users extends Component {
	usersLinks = [
		{
			name:'Deni',
			link:'#',
			comment: 'Вроде норм делаю'
		},
		{
			name:'Alex',
			link:'#',
			comment: 'Вроде норм делаешь'
		},
		{
			name:'Lena',
			link:'#',
			comment: 'Вроде норм делаете'
		}
	]
	state = {
		stateUsers: false,
		stateUsersLinks: false
	};

	componentWillMount() {
		this.setState({
			stateUsersLinks: true
		})
	};

	commentFunc = (comment) => {
		alert ('чей-то комент');
	}

	render(){
		this.state.stateUsers = this.props.funcUp;
		if(this.state.stateUsers) {
			return(
					<div className='usersLinks'>
						{this.usersLinks.map((usersLinks, index) => {
							return <UserLink
										key = {index}
										onClick = {this.commentFunc}
										name = {usersLinks.name}
										link = {usersLinks.link}
									/>
						})}
					</div>
				);
		} else {
			return false;
		}
	}
}

export default Users;
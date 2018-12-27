import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Users.css';

class Users extends Component {
	usersLinks = [
		{
			name:'Deni',
			to:'/users/DENI',
			id: 'DENI'
		},
		{
			name:'Alex',
			to:'/users/ALEX',
			id: 'ALEX'
		},
		{
			name:'Lena',
			to:'/users/LENA',
			id: 'LENA'
		}
	];

	render(){
		return(
				<div className='usersLinks'>
					{this.usersLinks.map((usersLinks, index) => {
						return <Link
									key = {index}
									id = {usersLinks.id}
									to = {usersLinks.to}>
									{usersLinks.name} пишет<br/><br/>
								</Link>
					})}
				</div>
			);	
	}
}

export default Users;
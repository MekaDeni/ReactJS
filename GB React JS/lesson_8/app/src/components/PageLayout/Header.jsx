//Компонент шапки
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
	linksMenu = [
		{
			label:'Home',
			id:'home',
			to:'/'
		},
		{
			label:'Blog',
			id:'blog',
			to:'/blog'
		},
		{
			label:'Comments',
			id:'comments',
			to:'/comments'
		},
		{
			label:'Users',
			id:'users',
			to:'/users'
		}
	];
	
	render() {
		return(
			<div className="mainMenu">
				<ul>
				{this.linksMenu.map((linksMenu, index) => {
					return <li key={index}>
								<NavLink
									 key={index}
									 id={linksMenu.id}
									 to={linksMenu.to}
									 activeClassName={'active'}>
									 {linksMenu.label}
								 </NavLink>
						 </li>
				})}
				</ul>
			</div>
		);
	};
}

export default Header;

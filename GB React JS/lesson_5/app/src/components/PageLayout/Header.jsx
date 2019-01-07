//Компонент шапки
import React, { Component } from 'react';
import './Header.css';

import Main from './Main.jsx';

class Header extends Component {
	linksMenu = [
		{
			link:'#',
			label:'Home',
			id:'home'
		},
		{
			link:'#',
			label:'Blog',
			id:'blog'
		},
		{
			link:'#',
			label:'Comments',
			id:'comments'
		},
		{
			link:'#',
			label:'Users',
			id:'users'
		}
	];
	
	state = {
		stateHeader: false
	}
	
	render() {
		const { callback } = this.props;
		return(
			<div className="mainMenu">
				<ul>
				{this.linksMenu.map((linksMenu, index) => {
					return <li key={index}>
								<a		
									 onClick={callback} 
									 id={linksMenu.id}
									 href={linksMenu.link} 
									 key={index}>
									 {linksMenu.label}
								 </a>
						 </li>
				})}
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.setState({
			stateHeader: true
		})
	}
}

export default Header;

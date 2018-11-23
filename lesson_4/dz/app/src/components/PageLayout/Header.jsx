//Компонент шапки
import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
	state = {
		stateHeader: false
	}
	
	render() {
		return(
			<div className="mainMenu">
				<ul>
					<li><a href="#">Home</a></li>
					<li><a href="#">New features</a></li>
					<li><a href="#">Press</a></li>
					<li><a href="#">New hires</a></li>
					<li><a href="#">About</a></li>
				</ul>
			</div>
		);
	}

	componentDidMount(prevProps ,prevState) {
		this.setState({
			stateHeader: true
		})
	}
}

export default Header;

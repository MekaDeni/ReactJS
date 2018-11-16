import React, { Component } from "react";
import './Header.css';

class Header extends Component {
	render() {
		const Link = () => {
			alert('hello');
		};
		return(
			<div className="header">
				<ul>
					<a href="#"><li>HOME</li></a>
					<a href="#"><li>ABOUT US</li></a>
					<a href="#"><li>CONTACTS</li></a>
				</ul>
				<a id="login" href="#" onClick={Link}>LOGIN</a>
			</div>
		);
	}
}

export default Header;
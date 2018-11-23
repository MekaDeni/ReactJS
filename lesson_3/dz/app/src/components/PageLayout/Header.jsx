import React, { Component } from "react";
import './Header.css';
import ModelLogin from "./ModelLogin.jsx";

class Header extends Component {
	render() {
		return(
			<div className="header">
				<ul>
					<a href="#"><li>HOME</li></a>
					<a href="#"><li>ABOUT US</li></a>
					<a href="#"><li>CONTACTS</li></a>
				</ul>
				<a id="login" href="#" data-toggle="modal" data-target="#exampleModal">
					LOGIN
				</a>
				<ModelLogin/>
			</div>
		);
	}
}

export default Header;
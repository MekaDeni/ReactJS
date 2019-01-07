import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
	render() {
		return (
			<div className="sidebar">
				<ul>
					<a href="#"><li>HOME</li></a>
					<a href="#"><li>ABOUT US</li></a>
					<a href="#"><li>CONTACTS</li></a>
				</ul>	
			</div>
		);
	}
}

export default Sidebar;
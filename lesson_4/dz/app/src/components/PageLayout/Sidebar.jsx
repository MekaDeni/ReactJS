//Компонент правого меню навигации
import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
	state= {
		stateSidebar: false
	}
	
	render() {
		return(
			<div className="sidebar">
				<div className="baner">
					<h3>About</h3>
					<p>
						Etiam porta sem malesuada magna mollis euismod. 
						Cras mattis consectetur purus sit amet fermentum. 
						Aenean lacinia bibendum nulla sed consectetur.
					</p>
				</div>
				<ul className="archivesBlock">
					<h3>Archives</h3>
					<li><a href="#">March 2014</a></li>
					<li><a href="#">February 2014</a></li>
					<li><a href="#">January 2014</a></li>
					<li><a href="#">December 2013</a></li>
					<li><a href="#">November 2013</a></li>
					<li><a href="#">October 2013</a></li>
					<li><a href="#">September 2013</a></li>
					<li><a href="#">August 2013</a></li>
					<li><a href="#">July 2013</a></li>
					<li><a href="#">June 2013</a></li>
					<li><a href="#">May 2013</a></li>
					<li><a href="#">April 2013</a></li>
				</ul>
				<ul className="elsewhereBlock">
					<h3>Elsewhere</h3>
					<li><a href="#">GitHub</a></li>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Facebook</a></li>
				</ul>
			</div>
		);
	}

	componentDidMount(prevProps ,prevState) {
		this.setState({
			stateSidebar: true
		})
	}
}

export default Sidebar;

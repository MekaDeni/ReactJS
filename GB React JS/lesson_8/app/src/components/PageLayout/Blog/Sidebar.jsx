//Компонент правого меню навигации
import React, { Component } from 'react';
import './Sidebar.css';

import LinkItem from './LinkItem.jsx';

class Sidebar extends Component {
	blogLinks = [
		{
			link:'#',
			label:'January 2014'
		},
		{
			link:'#',
			label:'December 2013'
		},
		{
			link:'#',
			label:'December 2013'
		},
	];

	state= {
		stateSidebar: false,
		stateLink: false
	};

	// for(const i=0;i<this.)

	renderBlogItem = event => {
		console.log(event.target)
	};

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
				<h3>Archives</h3>
				<ul className="archivesBlock">
					{this.blogLinks.map((blogLinks, index) => {
						return <LinkItem
									key = {index}
									func = {this.renderBlogItem}
									link = {blogLinks.link}
									label = {blogLinks.label}
								/>
					})}
				</ul>
				<h3>Elsewhere</h3>
				<ul className="elsewhereBlock">
					<li><a href="#">GitHub</a></li>
					<li><a href="#">Twitter</a></li>
					<li><a href="#">Facebook</a></li>
				</ul>
			</div>
		);
	}

	componentDidMount() {
		this.setState({
			stateSidebar: true,
			stateLink: true
		})
	}
}

export default Sidebar;

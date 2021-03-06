//Основной контент
import React, { Component } from 'react';
import './Blog.css';

import Sidebar from './Sidebar.jsx';
import January from './../Cards/January/January.jsx';
import December_2313 from './../Cards/December/December_2313.jsx';
import December_1413 from './../Cards/December/December_1413.jsx';

class Blog extends Component {
	state = {
		stateBlog: false
	}

	componentDidMount() {
		this.setState({
			stateBlog: true
		})
	}


	render() {
		// Искуствуенный ввод ошибки для теста компонента Page.jsx
		// eerrrrr
		this.state.stateBlog = this.props.funcUp;
		if(this.state.stateBlog) {
			return(
				<div className="conteiner">
					<Sidebar/>
					<main>
						<div className="mainHeader">
							<h1 id="headline">The Bootstrap Blog</h1>
							<p>The official example template of creating a blog with Bootstrap.</p>
						</div>
						<div id="mainContent">
							<January/>
							<December_2313/>
							<December_1413/>
						</div>
						<div className="buttonNav">
							<button>Previous</button>
							<button>Next</button>
						</div>
					</main>
				</div>
			);
		} else {
			return false;
		}
	}
}

export default Blog;

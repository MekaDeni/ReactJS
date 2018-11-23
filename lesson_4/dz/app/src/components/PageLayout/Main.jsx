//Основной контент
import React, { Component } from 'react';
import './Main.css';

import Sidebar from './Sidebar.jsx';
import January from './Card/January/January.jsx';
import December_2313 from './Card/December/December_2313.jsx';
import December_1413 from './Card/December/December_1413.jsx';

class Main extends Component {
	state = {
		stateMain: false
	}

	render() {
		// Искуствуенный ввод ошибки для теста компонента Page.jsx
		// eerrrrr
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
	}

	componentDidMount(prevProps ,prevState) {
		this.setState({
			stateMain: true
		})
	}
}

export default Main;

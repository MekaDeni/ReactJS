import React, { Component } from "react";
import "./Main.css";

import Sidebar from "./Sidebar.jsx";

class Main extends Component {
	render() {
		return (
			<div className="content">
				<p>
					Курс -  Geekbrains => React JS<br/>
					Преподаватель - Андрей Меньших<br/>
					Учащийся - Ндиле Мека Дэни<br/><br/>

					11.2018
				</p>
				<Sidebar/>
			</div>
		);
	}
}

export default Main;
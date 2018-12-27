import React, { Component } from "react";
import "./Main.css";

class Main extends Component {
	state = {
		stateMain: false,
		id:'home'
	}

	/*componentDidMount() {
		this.setState({
			stateMain: true
		})
	}*/
	
	render() {
		this.state.stateMain = this.props.funcUp;
		if(this.state.stateMain ) {
			return (
				<div className="content">
					<p>
						Курс -  Geekbrains => React JS<br/>
						Преподаватель - Андрей Меньших<br/>
						Учащийся - Ндиле Мека Дэни<br/><br/>
	
						11.2018
					</p>
				</div>
			);
		} else {
			return false;
		}
	}
}

export default Main;
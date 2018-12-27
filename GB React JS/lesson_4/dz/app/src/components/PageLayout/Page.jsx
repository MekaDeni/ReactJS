//Компонент страницы
import React, { Component } from 'react';

class Page extends Component {
	//состояние
	state = {
		statePage: "Plese wait...",
		statusPage: false
	};

	//Эмитация подрузги контент с сервера
	componentDidMount() {
		const startReq = new Promise (resolve => {
			setTimeout(() => {
				resolve('Completed')
			}, 1000)
		})

		startReq.then((status) => {
			this.setState({
				statePage: 'Completed',
				statusPage: true
			});
		}).catch(() => {
			document.write('ERRO...')
		})
	};
	
	render() {
		const { statePage } = this.state;
		const { children } = this.props;
		if (this.state.statusPage === true) {
			return(
				<div id="page">
					{ children }
				</div>
			);
		} else {
			return(
				<div id="page">
					{statePage}
				</div>
			);
		}
	};
}

export default Page;

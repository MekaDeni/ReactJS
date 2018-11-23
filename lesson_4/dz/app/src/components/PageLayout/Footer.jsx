//Компонент подвала 
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	state = {
		stateFooter: false
	}

	render() {
		return(
			<div className="footer">
				<p>
					Blog template built for Bootstrap by @mdo.<br/><br/>
					<a href='#headline'>Back to top</a>
				</p>
			</div>
		);
	}

	componentDidMount(prevProps ,prevState) {
		this.setState({
			stateFooter: true
		})
	}
}

export default Footer;

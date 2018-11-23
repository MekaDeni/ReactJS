//Родительский компонент 
import React, { Component, PureComponent } from 'react';

import Page from './PageLayout/Page.jsx';
import Header from './PageLayout/Header.jsx';
import Main from './PageLayout/Main.jsx';
import Footer from './PageLayout/Footer.jsx';

class App extends Component {
	state = {
		stateApp: false
	}

	componentWillMount() {
		this.setState({
			stateApp: true,
		})
	}

	render() {
		if(this.state.stateApp === true) {
			alert('Welcome');
			return(
				<Page>
					<Header/>
					<Main/>
					<Footer/>
				</Page>
			);
		}else {
			return(
				<Page>
					<p> ERRO...</p>
				</Page>
			);
		}
	}
}

export default App;

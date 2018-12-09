//Родительский компонент 
import React, { Component, PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import Page from './PageLayout/Page.jsx';
import Header from './PageLayout/Header.jsx';
import Conteiner from './PageLayout/Conteiner.jsx';
import Footer from './PageLayout/Footer.jsx';

import Main from './PageLayout/Main.jsx';
import Blog from './PageLayout/Blog/Blog.jsx';
import Comments from './PageLayout/Comments/Comments.jsx';
import UserSwitch from './PageLayout/Users/UserSwitch.jsx';

class App extends Component {

	state = {
		stateApp: false
	}
		

	componentWillMount() {
		this.setState({
			stateApp: true
		})
	}

	render() {
		if(this.state.stateApp === true) {
			return(
				<Page>
					<Header/>

					<Conteiner>
						<Switch>
							<Route exact path={"/"} component={Main} />
							<Route path={'/blog'} component={Blog} />
							<Route path={'/comments'} component={Comments} />
							<Route path={'/users'} component={UserSwitch} />
						</Switch>
					</Conteiner>

					<Footer/>
				</Page>
			);
		} else {
			return(
				<Page>
					<p> ERRO...</p>
				</Page>
			);
		}
	}
}

export default App;

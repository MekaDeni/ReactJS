//Родительский компонент 
import React, { Component, PureComponent } from 'react';

import Page from './PageLayout/Page.jsx';
import Header from './PageLayout/Header.jsx';
import Main from './PageLayout/Main.jsx';
import Blog from './PageLayout/Blog/Blog.jsx';
import Footer from './PageLayout/Footer.jsx';
import Comments from './PageLayout/Comments/Comments.jsx';
import Users from './PageLayout/Users/Users.jsx';

class App extends Component {

	state = {
		stateChildPage: {
			//Состояние компонентов и ссылки
			Main: {
				//по умолчанию true
				state: true,
				link:'home'
			},
			Blog: {
				state: false,
				link:'blog'
			},
			Comments: {
				state: false,
				link:'comments'
			},
			Users: {
				state: false,
				link:'users'
			}
		},
		stateApp: false
	}
		

	componentWillMount() {
		this.setState({
			stateApp: true
		})
	}

	trackLink = event => {
		/*1 - в цикле перебираем состояние компонентов
		2 - все присваем фолс(чтобы отчистить контент Page и вставить необходимый)
		3 - сравниваем ссылки у компонентов и id ссылки
		4 - при соответствии миняем состояние у компонента и обновляем состояние у stateChildPage через функцию updatePage
			передавая обновленное состояние stateChildPage*/
		for (const i in this.state.stateChildPage){
			this.state.stateChildPage[i].state = false;
			if(this.state.stateChildPage[i].link == event.target.id){
				this.state.stateChildPage[i].state = true;
				this.updatePage(this.state.stateChildPage)
			}
		}
	}

	updatePage = (obj) => {
		this.setState({
			stateChildPage:obj
		})
	}

	render() {
		if(this.state.stateApp === true) {
			return(
				<Page>
					<Header callback={this.trackLink}/>
					<Main funcUp={this.state.stateChildPage.Main.state}/>
					<Blog funcUp={this.state.stateChildPage.Blog.state}/>
					<Comments funcUp={this.state.stateChildPage.Comments.state}/>
					<Users funcUp={this.state.stateChildPage.Users.state}/>
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

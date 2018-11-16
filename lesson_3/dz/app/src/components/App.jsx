import React, { Component, PureComponent } from "react";

import MainPage from "./PageLayout/MainPage.jsx"
import Header from "./PageLayout/Header.jsx"
import Footer from "./PageLayout/Footer.jsx"
import Main from "./PageLayout/Main.jsx"

class App extends Component {
	render() {
		return(
			<MainPage>
				<Header/>
				<Main/>
				<Footer/>
			</MainPage>
		);
	}
}

export default App;
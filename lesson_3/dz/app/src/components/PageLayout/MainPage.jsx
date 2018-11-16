import React, { Component } from "react";

class MainPage extends Component {
	render() {
		const { children } = this.props;
		return <div id="page">{children}</div>;
	}
}

export default MainPage;
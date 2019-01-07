import React, { Component } from 'react';

class Conteiner extends Component {
	render(){
		const { children } = this.props;
		return(<div className='conteiner'>{children}</div>);
	}
}

export default Conteiner;
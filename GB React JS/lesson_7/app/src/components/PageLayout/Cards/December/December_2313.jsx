//Карточка архива декабрь 23
import React, { Component } from 'react';

class December_2313 extends Component {
	state = {
		stateCard: false
	}
	
	render() {
		return(
			<section>
				<div className="headerBlog">
					<h1>Another blog post</h1>
					<p>December 23, 2013 by Jacob</p>
				</div>
				<div className="contentBlog">
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
					</p>
					<div>
						<p>
							Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
						</p>
					</div>
					<p>
						Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
						<br/><br/>
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					</p>
				</div>
			</section>				
		);
	}

	componentDidMount() {
		this.setState({
			stateCard: true
		})
	}
}

export default December_2313;

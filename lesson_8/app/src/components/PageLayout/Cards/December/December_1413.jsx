//Карточка архива декабрь 14
import React, { Component } from 'react';

class December_1413 extends Component {
	state = {
		stateDecember_1413: false
	}

	render() {
		if(this.state.stateDecember_1413 === true) {
			return(
				<section>
					<div className="headerBlog">
						<h1>New feature</h1>
						<p>December 14, 2013 by Chris</p>
					</div>
					<div className="contentBlog">
						<p>
							Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
						</p>
						<ul>
							<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
							<li>Donec id elit non mi porta gravida at eget metus.</li>
							<li>Nulla vitae elit libero, a pharetra augue.</li>
						</ul>
						<p>
							Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
							<br/><br/>
							Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
						</p>
					</div>
				</section>				
			);
		} else {
			return (false)
		}
	}
}

export default December_1413;

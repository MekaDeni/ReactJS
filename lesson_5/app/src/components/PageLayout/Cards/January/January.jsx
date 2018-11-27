//Карточка архива Январь
import React, { Component } from 'react';

class January extends Component {
	state = {
		stateCard: false
	}

	render() {
		return(
			<section>
				<div className="headerBlog">
					<h1>Sample blog post</h1>
					<p>January 1, 2014 by Mark</p>
				</div>
				<div className="contentBlog">
					<p>
						This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.
						<hr/>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
						<br/>
						<br/>
						<span>
							Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
						</span><br/><br/>
						Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
					</p>

					<h2>Heading</h2>
					<p>
						Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					</p>
					
					<h3>Sub-heading</h3>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br/><br/>
						<span>Example code block</span><br/><br/>
						Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.
					</p>

					<h3>Sub-heading</h3>
					<p>
						Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
						<ul>
							<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
							<li>Donec id elit non mi porta gravida at eget metus.</li>
							<li>Nulla vitae elit libero, a pharetra augue.</li>
						</ul>
						Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
						<ol>
							<li>Vestibulum id ligula porta felis euismod semper.</li>
							<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
							<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
						</ol>
						Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
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

export default January;
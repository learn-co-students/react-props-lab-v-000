import React from 'react'

export default class Spaceship extends React.Component {
	render() {
		return(
			<div>
				<h1>{this.props.name}</h1>
				<h2>Speed: {this.props.speed}</h2>
				<h2>Has rockets: {this.props.hasRockets ? "Yes" : "No"}</h2>
				<ul>
					<li>
						{this.props.colors.join(', ')}
					</li>
				</ul>
			</div>
		);
	}
}

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
};

import React from 'react';

export default class Spaceship extends React.Component {
	render() {
		return (
			<div className="spaceship-card">
				<h1>Spaceship Info</h1>
				<ul>
					<li>Name: {this.props.name}</li>
					<li>Speed: {this.props.speed}</li>
					<li>Has Rockets: {this.props.hasRockets}</li>
					<li>Colors: {this.props.colors.join(', ')}</li>
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
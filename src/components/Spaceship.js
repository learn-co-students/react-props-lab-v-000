// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
	render() {
		return (
			<div className="Spaceship">
				<h3>{this.props.name}</h3>
				<p>{this.props.speed}</p>
				<p>{this.props.hasRockets}</p>
				<p>{this.props.colors}</p>
			</div>				
		)
	}
}

Spaceship.defaultProps = {
	hasRockets: false,
	speed: "slow",
	colors: ['black', 'red']
}


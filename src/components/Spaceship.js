import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
	render () {
		//const { name, speed, hasRockets, colors } = this.props;
		return (
			<div className="spaceship">
				<h1>Spaceship Name: {this.props.name}</h1>
				<h3>Speed: {this.props.speed}</h3>
				<h3>Has Rockets?: {this.props.hasRockets}</h3>
				<h3>Colors: {this.props.colors.join(', ')}</h3>
			</div>
			)
	}
}

Spaceship.defaultProps = {
	colors: ['black', 'red'],
	hasRockets: false,
	speed: 'slow'
};


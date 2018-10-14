// Code The Spaceship Component Here
//
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component { 

	render() {

		return (
			<div>
				<h1>{this.props.name}</h1>				
				<p>{this.props.speed}</p>
				<small>Colors: {this.props.colors}</small>
			</div>
		);

	}

};

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
};

export default Spaceship;

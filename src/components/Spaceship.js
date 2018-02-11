import React from 'react';

export default class Spaceship extends React.Component {
	render() {
		return (
			<div>
				<div>{this.props.name}</div>
				<div>{this.props.speed}</div>
				<div>{this.props.hasRockets}</div>
				<div>{this.props.colors}</div>
			</div>

		)
	};
};

Spaceship.defaultProps = {
  speed: 'slow',
  colors: ['black', 'red'],
  hasRockets: false
};
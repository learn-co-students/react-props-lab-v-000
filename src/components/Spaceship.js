import React from 'react';

class Spaceship extends React.Component {
	render() {
		return (
			<div>
				<h3>{this.props.name}</h3>
				<p>speed: {this.props.speed}</p>
				<p>rockets? {this.props.hasRockets ? 'true' : 'false'}</p>
				<p>colors: {this.props.colors.join(', ')}</p>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	name: 'Speedy',
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
}

export default Spaceship
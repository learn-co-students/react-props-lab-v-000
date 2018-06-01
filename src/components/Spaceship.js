import React from 'react';

export default class Spaceship extends React.Component {
	render() {
		return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.colors}</p>
      </div>
		)
	}
}

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
}

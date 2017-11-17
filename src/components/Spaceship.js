import React from 'react'
	
export default class Spaceship extends React.Component {
	render() {
		return (
			<div className="space-ship">
				<p>Name: {this.props.name}</p>
				<p>Speed: {this.props.speed}</p>
				<p>Rockets: {this.props.hasRockets}</p>
				<p>Colors: {this.props.colors}</p>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: ["black", "red"]
}




// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
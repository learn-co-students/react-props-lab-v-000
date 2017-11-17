import React from 'react'
	
export default class Spaceship extends React.Component {
	render() {
		const { name, speed, hasRockets, colors } = this.props;

		return (
			<div className="space-ship">
				<p>Name: {name}</p>
				<p>Speed: {speed}</p>
				<p>Rockets: {hasRockets}</p>
				<ul>
          {colors.map((color) => <li>{color}</li>)}
        </ul>
			</div>
		)
	}
}

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: ["black", "red"]
}
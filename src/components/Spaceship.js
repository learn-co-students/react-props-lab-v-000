import React from 'react';

class Spaceship extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.name}</h1>
				<h4>{this.props.speed}</h4>
				<h4>{this.props.hasRockets}</h4>
				<ul>
					{this.props.colors.map(color => <li> {color} </li>)}
				</ul>
			</div>
		);
	}
};

Spaceship.defaultProps = {
	speed: "slow",
	hasRockets: false,
	colors: ["black", "red"]
};

export default Spaceship;







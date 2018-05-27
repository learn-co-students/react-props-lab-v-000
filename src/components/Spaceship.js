import React from 'react';

class Spaceship extends React.Component {
	render() {
		return (
			<div className="spaceship">
				<fieldset>
					<h3>Name: {this.props.name}</h3>
					<p>Speed: {this.props.speed}</p>
					<p>Has rockets: {this.props.hasRockets ? 'true' : 'false'}</p>
					<p>Colors: {this.props.colors.join(', ') || "no colors specified"}</p>
				</fieldset>
			</div>
		);
	};
}

Spaceship.defaultProps = {
	colors: ['black', 'red'],
	hasRockets: false,
	speed: 'slow'
}

Spaceship.propTypes = {

}

export default Spaceship;

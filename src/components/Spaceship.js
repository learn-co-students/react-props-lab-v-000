// Code The Spaceship Component Here
import PropTypes from 'prop-types';
import React from 'react';

export default class Spaceship extends React.Component {
	static defaultProps = {
	    speed: 'slow', 
	    hasRockets: false,
    	colors: ["black", "red"] 
	}

	render() {
		return (
			<div>
				Name: {this.props.name}
				Speed: {this.props.speed}
				Has Rockets: {this.props.hasRockets}
				Colors: {this.props.colors}
			</div>
		);
	}
};
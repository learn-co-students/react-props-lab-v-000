// Code The Spaceship Component Here
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Spaceship extends Component {
    render () {
        return (
            <div className="spaceship">
                <p> {this.props.name} </p>
                <p> {this.props.speed} </p>
                <p> {this.props.hasRockets} </p>
                <p> {this.props.colors.join(', ')} </p>
            </div>
        )
    }
}

Spaceship.propTypes = {
    name: PropTypes.string,
    speed: PropTypes.string, 
    hasRockets: PropTypes.bool,
    colors: PropTypes.array
};

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};

export default Spaceship;
import React from 'react';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {        render() {
        return (
            <div className="spaceship">
                <h1>{this.props.name}</h1>
                <h3><em>Speed: {this.props.speed}</em></h3>
                <p>Does this thing have rockets? {this.props.hasRockets ? 
                    "YOU BET YOUR ASS!" : 
                    "yeah... that'd be cool, huh"}
                </p>
                <p><em>AND</em> it's {colorFormat(this.props.colors)}
                </p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red'],
}

Spaceship.propTypes = {
    name: PropTypes.string.isRequired,
    speed: PropTypes.string,
    hasRockets: PropTypes.bool,
    colors: PropTypes.arrayOf(PropTypes.string),
}
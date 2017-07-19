import React from 'react';

export default class Spaceship extends React.component {
    render () {
        return (
            <div>
                <h3>{ this.props.name }</h3>
                <p>Speed: { this.props.speed }</p>
                <p>Has Rockets: { this.props.hasRockets ? "Yes" : "No" } </p>
                <p>Colors: {this.props.colors.join(', ')}</p>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
};
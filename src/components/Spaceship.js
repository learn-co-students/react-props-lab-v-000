import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div className="spaceship">
                <h1>{this.props.name}</h1>
                <p>Speed: {this.props.speed}</p>
                <p>Colors: {this.props.colors}</p>
                <p>Rockets: {this.props.rockets}</p>
            </div>

        )
    }
};

Spaceship.defaultProps = {
    hasRockets: false,
    speed: 'slow',
    colors: ['black', 'red']
};
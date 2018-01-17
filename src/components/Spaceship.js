// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
    render() {
        return (
            <div className="spaceship">
                <p>Name: {this.props.name}</p>
                <p>Speed: {this.props.speed}</p>
                <p>Has Rockets? {this.props.hasRockets}</p>
                <p>Colors: {this.props.colors.join(', ')}</p>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    colors: ['black', 'red'],
    hasRockets: false,
    speed: 'slow'
}

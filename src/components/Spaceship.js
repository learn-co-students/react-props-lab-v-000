// Code The Spaceship Component Here
import React, {Component} from 'react';

class Spaceship extends Component {
    render() {
        return (
            <div>
                <h1>Spaceship Name: {this.props.name}</h1>
                <p>Speed: {this.props.speed}</p>
                <p>Has rockets? {this.props.hasRockets}</p>
                <p>Color scheme: {this.props.colors}</p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;
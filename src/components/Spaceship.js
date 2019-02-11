// Code The Spaceship Component Here
import React, { Component } from 'react';

export default class Spaceship extends Component {
    render() {
        return(
            <div>
                <h1>{ this.props.name }</h1>
                <h3> Speed: { this.props.speed }</h3>
                <h3>colors: { this.props.colors.join(', ') } </h3>
                <h3>Has rockets? { this.props.hasRockets } </h3>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed : "slow",
    colors: ['black', 'red'],
    hasRockets: false
}

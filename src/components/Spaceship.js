import React from 'react';

export default class Spaceship extends React.Component {

    // name (string)
    // speed (number, defaults to slow)
    // hasRockets (boolean, defaults to false)
    // colors (array of strings, defaults to ['black', 'red'])

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <small>{this.props.speed}</small>
                <small>Has rockets? {this.props.hasRockets}</small>
                <small>Colors: {this.props.colors.join(', ')}</small>
            </div>
        )
    }

}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}
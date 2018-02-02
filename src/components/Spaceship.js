import React from 'react';
export default class Spaceship extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.name} the spaceship</h1>
                <p>Speed: {this.props.speed}</p>
                <p>{this.props.hasRockets ? "Rocket powered!" : "No rockets...yet"}</p>
                <p>Colors: {this.props.colors.join(", ")}</p>
            </div>
        )
    }
}
Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}
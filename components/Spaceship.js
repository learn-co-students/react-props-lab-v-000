import React from 'react';

export default class Spaceship extends React.Component {
    render () {
        return (
            <div class="spaceship">
                <h2>{this.props.name}</h2>
                <p><strong>Speed: {this.props.speed}</strong></p>
                <p>Has Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
                <p>Colors: {this.props.colors.join()}</p>
            </div>
        );
    }
};

Spaceship.defaultProps = {
    hasRockets: false,
    colors: ['black', 'red']
};
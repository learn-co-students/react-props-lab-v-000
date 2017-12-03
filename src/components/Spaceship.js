// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h1>Spaceship Name: {this.props.name}</h1>
                <p>Speed: {this.props.speed}</p>
                <p>Rockets: {this.props.speed ? "Yes" : "No"}</p>
                <p>Colors: 
                    <ul>
                        {this.props.colors.map(color => <li>{color}</li>)}
                    </ul>
                </p>
            </div>
        );
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
};
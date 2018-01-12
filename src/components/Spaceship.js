// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
    render() {
        const { name, speed, hasRockets, colors } = this.props;

        return (
            <div>
                <h1> {this.props.name} </h1>
                <h2> {this.props.speed} </h2>
                <h2>Rockets: {hasRockets ? "Yes" : "No"}</h2>
                <ul>
                    {colors.map(function(color) {
                        return <li>{color}</li>
                    })}
                </ul>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;



/*
name (string)
speed (number, defaults to slow)
hasRockets (boolean, defaults to false)
colors (array of strings, defaults to ['black', 'red'])
Feel free to render out the data in any form you wish!

Note: you'll need to export the Spaceship component, like this:

export default class Spaceship extends React.Component { ... };
// OR declare your component first, and then:
export default Spaceship;
*/
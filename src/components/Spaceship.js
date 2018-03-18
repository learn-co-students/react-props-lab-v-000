// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
    render() {
        return (
            <div>
                <h3>Spaceship Name: {this.props.name}</h3>
                <h3>{this.props.speed}</h3>
                <h3>Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</h3>
                <ul>
                    {this.props.colors.map((color, index) => <li key={index}>{color}</li>)}
                </ul>
            </div>
        );         
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;

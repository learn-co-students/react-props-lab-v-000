// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
    render(){
        return (
            <div className="spaceship">
                <h1>{this.props.name}</h1>
                <h1>{this.props.speed}</h1>
                <h1>{this.props.hasRockets ? "Yes" : "No"}</h1>
                <h1>{this.props.colors.join(', ')}</h1>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}
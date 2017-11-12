import React from 'react';
import ReactDOM from 'react-dom';

// Code The Spaceship Component Here
export default class Spaceship extends React.Component {
    render(){
        return (
           <div>
                <h1>{this.props.name}</h1>
                <p>Speed: {this.props.speed}</p>
                <p>Has rockets: {this.props.hasRockets}</p>        
                <ul>
                    {this.props.colors.map((color) => <li>{color}</li>)}
                </ul>
            </div>
        )
    }
    
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ["black", "red"]
}
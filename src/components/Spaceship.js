import React from 'react'
// Code The Spaceship Component Here

export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red'],
};
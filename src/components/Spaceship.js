import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className = "spaceship"> 
      <h2>{this.props.name}</h2> 
      <ul>
        <li>Speed: {this.props.speed}</li>
        <li>Has Rockets: {this.props.hasRockets}</li> 
        <li>Colors: {this.props.colors}</li> 
      </ul>
      </div> 
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow", 
  hasRockets: false, 
  colors: ['black', 'red']
};
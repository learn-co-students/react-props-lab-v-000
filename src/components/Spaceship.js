// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render(){
    return (
      <div className="space-ship">
      <h2>Name: {this.props.name}</h2>
      <h4>Speed: {this.props.speed}</h4>
      <p>Rockets: {this.props.hasRockets}</p>
      <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: `['black', 'red']`
}

// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <h3>Does it have rockets? {this.props.hasRockets}</h3>
        <small>Colors: {this.props.colors.join(", ")}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

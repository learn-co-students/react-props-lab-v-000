// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Has Rockets: {this.props.hasRockets? 'yes':'no'} </li>
          <li>colors: {this.props.colors.join(", ")} </li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship

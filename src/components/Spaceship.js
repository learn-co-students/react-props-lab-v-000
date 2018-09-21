// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
      {this.props.name}
      {this.props.speed}
      {this.props.hasRockets}
      {this.props.colors}
      </div>
    )
  }

}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black','red']
}

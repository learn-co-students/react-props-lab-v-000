// Code The Spaceship Component Here
import React from 'React'

export default class Spaceship extends React.Component {
  render() {
    const { name, speed, colors, hasRockets } = this.props
    return (
      <div>
        {name} {speed} {colors} {hasRockets}
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}


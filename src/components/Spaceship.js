import React from 'react'

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.speed}</div>
        <div>{this.props.hasRockets}</div>
        <div>{this.props.colors}</div>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  name: 'unnamed',
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship

import React from 'react'

class Spaceship extends React.Component {
  render() {
    let rockets
    if (this.props.hasRockets) {
      rockets = "Yes"
    } else {
      rockets = "No"
    }
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets?: {rockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship

// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render () {
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <p>Speed:   {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors:  {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

const defaultColors = ['black', 'red']

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: defaultColors
}

export default Spaceship
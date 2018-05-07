// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h4>{this.props.colors.join(', ')}</h4>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship

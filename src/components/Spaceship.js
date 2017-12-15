// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

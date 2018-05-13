import React from 'react';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div class="spaceship">
        <h3>{this.props.name}</h3>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

import React from 'react';

export default class SpaceShip extends React.Component {
  render(){
    return (
      <div>
        <p>{this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? 'yes' : 'no'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

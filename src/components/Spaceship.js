import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h5>Colors</h5>
        <p>{this.props.colors.join(', ')}</p>
        <h5>Speed</h5>
        <p>{this.props.speed}</p>
        <h5>Rockets?</h5>
        <p>{this.props.hasRockets}</p>
      </div>
      
      );
  }
};


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

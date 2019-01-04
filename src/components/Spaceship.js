// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return(
      <div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.speed}</h2>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

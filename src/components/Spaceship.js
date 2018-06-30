// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name{this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
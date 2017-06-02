import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false
};

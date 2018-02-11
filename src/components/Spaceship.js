// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="sship">
        <span>{this.props.name}</span>
        <span>{this.props.speed}</span>
        <span>{this.props.hasRockets}</span>
        <span>{this.props.colors}</span>
      </div>
    );
  };
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

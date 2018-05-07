import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors}</h3>
      </div>
    )
  };
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
  // speed: "186,000m/s",
  // hasRockets: true,
  // colors: ['black', 'yellow']
};

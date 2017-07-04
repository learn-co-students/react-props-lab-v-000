// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <br/><br/>
        <h3>{this.props.speed}</h3>
        <br/><br/>
        <h3>{this.props.hasRockets}</h3>
        <br/><br/>
        <h3>{this.props.colors}</h3>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

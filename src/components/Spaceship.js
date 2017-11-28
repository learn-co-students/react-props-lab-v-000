// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render () {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div className="spaceship">
        <h1>Spaceship Name: {name}</h1>
        <p>Speed: {speed}</p>
        <p>Armed with rockets: {hasRockets ? "Yes" : "No"}</p>
        <p>Colors: {colors.join(', ')}</p>
      </div>
    );
  };
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

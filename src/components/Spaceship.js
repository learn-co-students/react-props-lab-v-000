import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>Spaceship Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? "Yes!" : "No"} </p>
        <p>Colors: {this.props.colors.join(", ")} </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

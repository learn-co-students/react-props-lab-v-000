// Code The Spaceship Component Here
import React from 'react'

export default class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div className="spaceship">
        <h1>{name}</h1>
        <h5>Speed: {speed}</h5>
        <h5>Rockets: {hasRockets ? "Yes" : "No" } </h5>
        <label> Colors: </label>
        <ul>
        {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    );
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['red', 'black']
}
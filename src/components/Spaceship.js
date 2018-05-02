// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{hasRockets ? "Yes" : "No"}</h2>
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
  colors: ['black', 'red']
}

export default Spaceship;

// Code The Spaceship Component Here
import React from 'react';
class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (
      <div>
        <h1>{name}</h1>
          <p><b>Speed:</b> {speed}</p>
          <p><b>Rockets:</b>{hasRockets ? "Yes" : "No"}</p>
          <p><b>Colors:</b></p>
          <ul>
            {colors.map((color, index) => <li key={index}>{color}</li>)}
          </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship

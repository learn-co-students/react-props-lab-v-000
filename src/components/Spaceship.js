// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div class="">
        <p>Spaceship name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets? {this.props.hasRockets ? "Yes" : "No"}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>

    )
  }
}
Spaceship.defaultProps = {
  name: "Spaceship",
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

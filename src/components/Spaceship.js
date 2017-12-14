// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {
  render() {
    return(
      <div class="spaceship-component">
        <h3>{this.props.name}</h3>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets ? "Has rockets" : "does not have rockets"}</p>
        <small>{this.props.colors.join(', ')}</small>
      </div>
    );
  };
}

const spaceshipColors = ['black', 'red']

Spaceship.defaultProps = {
  hasRockets: false,
  colors: spaceshipColors,
  speed: "slow"
}

export default Spaceship

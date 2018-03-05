// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.speed}</h3>
        <h3>{this.props.hasRockets}</h3>
        <h3>{this.props.colors}</h3>
      </div>
    )
  }
}
const spaceshipColors = ['black', 'red'];
Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: spaceshipColors
}

ReactDOM.render (
  <Spaceship
    name="My Spaceship"
  />,
  document.getElementById('global')
)
export default Spaceship;

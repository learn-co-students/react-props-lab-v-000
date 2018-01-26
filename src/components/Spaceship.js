import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <h3>Speed: {this.props.speed}</h3>
        <h4>Rockets?: {this.props.hasRockets}</h4>
        <h4>Colors: {this.props.colors.join(", ")}</h4>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

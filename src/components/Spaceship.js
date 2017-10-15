// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Spaceship extends React.Component {
  render() {
    return (
      <div className = "ship">
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has Rockets?: {this.props.hasRockets}</h3>
        <h3>Colors: {this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.array
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

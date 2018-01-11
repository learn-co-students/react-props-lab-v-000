import React from 'react';

// Code The Spaceship Component Here
class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.speed}</h1>
        <h1>{this.props.hasRockets}</h1>
      </div>
    );
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: "slow",
  hasRockets: false
};

export default Spaceship

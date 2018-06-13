import React from 'react';
import PropTypes from 'prop-types';

// Code The Spaceship Component Here
export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-info">
        <h1>Name: {this.props.name}</h1>
        <h3>Speed: {this.props.speed}</h3>
        <h3>Has Rockets: {this.props.hasRockets ? "Yep" : "Nope"}</h3>
        <h3>Colors: {this.props.colors.join(', ')}</h3>
      </div>
    )
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.boolean,
  colors: PropTypes.array
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

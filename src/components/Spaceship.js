import React from 'react';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {
  render() {
    return(
      <div className="space-ship">
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets ? "true" : "false"}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.array
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets:false,
  colors: ['black', 'red']
};

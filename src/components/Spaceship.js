import React from 'react';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {
  debugger;
  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <h2>{typeof this.props.speed === 'number' ?
          `${this.props.spee} MPH` :
          this.props.speed
        }</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ["black", "red"]
}

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
}
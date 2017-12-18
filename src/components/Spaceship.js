import React from 'react';
import PropTypes from 'prop-types';

const Spaceship = ({ name, speed, hasRockets, colors }) => (
  <div>
    <h2>{name}</h2>
    <p>Speed: {speed}</p>
    <p>Rockets?: {hasRockets}</p>
    <p>Colors: {colors.join(', ')}</p>
  </div>
);

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

Spaceship.propTypes = {
  name: PropTypes.string.isRequired,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Spaceship;

// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Rockets? {this.props.hasRockets}</p>
        <p>How fast? {this.props.speed}</p>
        <p>Colors? {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

Spaceship.propTypes = {
  name: PropTypes.string,
  hasRockets: Proptypes.bool,
  speed: PropTypes.number,
  colors: PropTypes.array
}

export default Spaceship;

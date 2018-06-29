// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>{this.props.speed}</li>
          <li>{this.props.hasRockets}</li>
          <li>{this.props.colors.join(', ')}</li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

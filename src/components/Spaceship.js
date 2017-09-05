// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <h5>{this.props.speed}</h5>
        <small>{this.props.hasRockets}</small>
        <small>Genres: {this.props.colors.join(', ')}</small>
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
import React from 'react';

class Spaceship extends React.Component {
  render()  {
    return  (
      <div className="spaceship">
      <h1>Name: {this.props.name}</h1>
      <h2>Speed: {this.props.speed}</h2>
      <p>Has Rockets:{this.props.hasRockets}</p>
      <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
      );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black','red']
}


module.exports = Spaceship



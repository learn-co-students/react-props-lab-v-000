// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <h2>{this.props.name}</h2>
        <p>{this.props.speed}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
export default Spaceship
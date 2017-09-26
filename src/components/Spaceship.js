// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h2>name: {this.props.name}</h2>
        <p>speed: {this.props.speed}</p>
        <p>has_rockets: {this.props.hasRockets}</p>
        <p>colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

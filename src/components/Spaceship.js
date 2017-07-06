import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>name={this.props.name}</p>
        <p>speed={this.props.speed}</p>
        <p> hasRockets={this.props.hasRockets}</p>
        <p>colors={this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps={
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};
import React from 'react';

export default class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <title>Info about {this.props.name}!</title>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Has Rockets? {this.props.hasRockets}</li>
          <li>Colors: {this.props.colors}</li>
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

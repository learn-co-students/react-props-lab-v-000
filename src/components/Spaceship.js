import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div> 
        <h2>{this.props.name}</h2>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets? {this.props.hasRockets ? "Yes" : "No"}</li>
          <li>Colors: {this.props.colors.join(', ')}</li>
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

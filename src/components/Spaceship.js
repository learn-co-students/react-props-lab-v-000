import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p><strong>Speed: </strong>{this.props.speed}</p>
        <p><strong>Rockets: </strong>{this.props.hasRockets}</p>
        <p><strong>Colors:</strong></p>
        <ul>
          {this.props.colors.map(function(color) {
            return <li>{color}</li>
          })}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

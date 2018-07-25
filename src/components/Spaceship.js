import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship-card">
        <h1>{this.props.name}</h1>
        <ul>
          <li>{this.props.speed}</li>
          <li>{this.props.hasRockets}</li>
          <li>{this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
}
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

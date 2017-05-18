import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.speed}</li>
        <li>{this.props.hasRockets}</li>
        <li>{this.props.colors}</li>
      </ul>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship


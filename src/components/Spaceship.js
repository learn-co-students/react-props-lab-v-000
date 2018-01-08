import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className = "awesome-spaceship" >
        <h1>{ this.props.name }</h1>
        <p>Colors: { this.props.colors.join(', ') }</p>
        <p>Speed: { this.props.speed }</p>
        <p>Has Rockets: { (this.props.hasRockets ? 'Yes' : 'No') }</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
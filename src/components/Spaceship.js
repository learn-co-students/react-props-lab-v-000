import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    // alternatively, for cleaner code, set up this.props to a const
    // const { name, speed, hasRockets, colors } = this.props;
    return (
      <div>
        <p>Spaceship name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? "Yes" : "No"}</p>
        <ul>
          {this.props.colors.map((color, index) => <li key={index}>{color}</li>)}
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

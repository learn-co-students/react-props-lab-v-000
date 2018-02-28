import React from 'react';

export default class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}






// 1. In the `components/Spaceship.js` file, create a `Spaceship` React component
// 2. This component has several props:
//     1. `name` (string)
//     2. `speed` (number, defaults to `slow`)
//     3. `hasRockets` (boolean, defaults to `false`)
//     4. `colors` (array of strings, defaults to `['black', 'red']`)

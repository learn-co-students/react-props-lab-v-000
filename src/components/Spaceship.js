// In the components/Spaceship.js file, create a Spaceship React component
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
// Feel free to render out the data in any form you wish!


// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return(
      <div className="spaceship">
      <h1>{this.props.name}</h1>
      <span>Speed: </span>
      <strong>{this.props.speed}</strong>
      <br/>
      <span>Has Rockets?: </span>
      <strong>{this.props.hasRockets.toString()}</strong>
      <br/>
      <span>Colors: </span>
      <strong>{this.props.colors.join(", ")}</strong>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>

      </div>
    )

  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}



// Note: you'll need to export the Spaceship component, like this:
// export default class Spaceship extends React.Component { ... };
// OR declare your component first, and then:
export default Spaceship;

// Code The Spaceship Component Here
import React from 'react';

// First attempt 4/29/18
// class Spaceship extends React.Component {
//   render() {
//     return (
//       <div className="spaceship">
//         <p>Name: {this.props.name}</p>
//         <p>Speed: {this.props.speed}</p>
//         <p>Has Rockets: {this.props.hasRockets}</p>
//         <p>Colors: {this.props.colors.join(", ")}</p>
//       </div>
//     );
//   }
// };
//
// Spaceship.defaultProps = {
//   speed: "slow",
//   hasRockets: false,
//   colors: ['black', 'red']
// };
//
// export default Spaceship;

// Second attempt 11/4/18
class Spaceship extends React.Component {
  render() {
    return (
      <div id="spaceship">
        <p>{ this.props.name }</p>
        <p>{ this.props.speed }</p>
        <p>{ this.props.hasRockets }</p>
        <p>{ this.props.colors }</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

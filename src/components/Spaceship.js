import React from 'react';

export default class Spaceship extends React.Component {
  render() {
  return(
    <div>
      <h1>{this.props.name}</h1>
      <p><em>Speed:</em> {this.props.speed}</p>
      <p><em>Rockets?:</em> {this.props.hasRockets === false ? "no" : "heck yeah!"}</p>
      <p><em>Colors:</em> {this.props.colors.join(" and ")}</p>
    </div>
  )
}
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};
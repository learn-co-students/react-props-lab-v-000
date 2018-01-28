// Code The Spaceship Component Here
import React from 'react';
export default class Spaceship extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.speed}</td>
        <td>{this.props.hasRockets}</td>
        <td>{this.props.colors}</td>
      </tr>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

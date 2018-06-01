// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>name: {this.props.name}</p>
        <p>speed: {this.props.speed}</p>
        <p>has rockets?: {this.props.hasRockets ? "True" : "False"}</p>
        <p>colors: {this.props.colors.map(x => <i>{x} </i>)}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
};

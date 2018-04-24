// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h3>Information about {this.props.name}:</h3>
        <ul>
          <h4>{this.props.name} is: {this.props.speed}.</h4>
          <h4>{this.props.name} has rockets?: {this.props.hasRockets ? "Yes" : "No"}.</h4>
          <h4>{this.props.name} include the following colors: {this.props.colors.join(', ')}.</h4>
        </ul>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

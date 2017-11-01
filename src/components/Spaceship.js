// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <h1>Ship name: { this.props.name }</h1>
        <h2>Current speed: { this.props.speed }</h2>
        <h3>Built-in rockets: { this.props.hasRockets }</h3>
        <p>Colors: { this.props.colors.join(', ') }</p>
      </div>
    );
  }
}

// const colors = ['black', 'red'];
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

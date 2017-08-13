// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
}

const defaultColors = ["black", "red"];

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: defaultColors
};

ReactDOM.render(
  <Spaceship
    name="Jurassic World"
  />,
  document.getElementById('root')
);

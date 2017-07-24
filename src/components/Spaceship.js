// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render() {
    Spaceship.defaultProps = {
      speed: 'slow',
      hasRockets: false,
      colors: ['black', 'red']
    };
    return (

      <div>
        name = {this.props.name}
        speed = {this.props.speed}
        colors = {this.props.colors}
      </div>
    )
  }
}

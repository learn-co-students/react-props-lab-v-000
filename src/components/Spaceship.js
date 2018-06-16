// Code The Spaceship Component Here
 import ReactDOM from 'react-dom';
 import React from 'react';

 //const spaceshipColors = ['black', 'red']
 
 export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
      <h3>Name: {this.props.name}</h3>
      <h3>Speed: {this.props.speed}</h3>
      <h3>Has Rockets: {this.props.hasRockets}</h3>
      <h3>Colors: {this.props.colors.join(', ')}</h3>
      }
      </div>
      )
  }
 }

 Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
 }
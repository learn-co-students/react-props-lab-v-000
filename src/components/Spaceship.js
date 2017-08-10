import React from 'react'
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
        <div>
            <h2>Spaceship: { this.props.name }</h2>
            <p>Speed: { this.props.speed }</p>
            <p>Has Rockets?: { this.props.hasRockets }</p>
            <p>Colors: { this.props.colors }</p>
        </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  colors: ['black', 'red'],
  hasRockets: false
}
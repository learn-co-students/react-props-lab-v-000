import React from 'react';
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>name = {this.props.name}</p>
        <p>speed = {this.props.speed}</p>
        <p>hasRockets = {this.props.hasRockets}</p>
        <p>colors = {this.props.colors}</p>
       </div>
    )
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}



export default Spaceship;// Code The Spaceship Component Here
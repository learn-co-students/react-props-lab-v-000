import React from 'react'

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>{this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;

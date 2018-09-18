import React from 'react'
import ReactDOM from 'react-dom'

class Spaceship extends React.Component {
    render(){
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>Speed: {this.props.speed}</p>
          <p>Has Rockets: {this.props.hasRockets}</p>
          <p>Colors: {this.props.colors}</p>
        </div>
      )
    }
  }

  Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

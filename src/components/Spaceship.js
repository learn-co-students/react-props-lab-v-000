import React from 'react'

export default class Spaceship extends React.Component {
  render (){
    return(
      <div>
        <h1> {this.props.name}</h1>
        <ul>
          <li>Speed: {this.props.speed} </li>
          <li>{this.props.hasRockets ? 'Has Rockets' : 'Doesn\'t have rockets'}</li>
          
          <li>Colors: {this.props.colors.join(', ')} </li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

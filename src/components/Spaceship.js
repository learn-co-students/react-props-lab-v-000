import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets? {this.props.hasRockets ? "Yes" : "No" }</p>
        <p>Colors:</p>
        <ul>
          {this.props.colors.map((color, index) => <li key={index}>{color}</li>)}
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

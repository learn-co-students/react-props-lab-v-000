import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li>Speed: {this.props.speed}</li>
          {!!this.props.hasRockets &&
            <li>Armaments: Rockets</li>
          }
          {this.props.colors.length > 0 &&
            <li>Colors: {this.props.colors.join(', ')}</li>
          }
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

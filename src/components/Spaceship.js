import React from 'react';

export default class Spaceship extends React.Component{
  render(){
    return(
      <div className="Spaceship">
        {this.props.name}
        {this.props.speed}
        {this.props.hasRockets}
        {this.props.colors}
      </div>
    )
  }
}
Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
}

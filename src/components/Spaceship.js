import React from 'react';

export default class Spaceship extends React.Component { 
    render() {
        return (
          <div className="spaceship">
            <h1>{this.props.name}</h1>  
            <small>Speed: {this.props.speed}</small>
            <small>Has Rockets?{this.props.hasRockets}</small>
            <small>Color(s): {this.props.colors.join(', ')}</small>
          </div>
        );
      }
 };


Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}



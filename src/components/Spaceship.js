// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return (
      <div className='spaceship'>
        <h1>{this.props.name}</h1>
        <h3>Details</h3>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets?: {this.props.hasRocket}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    )
  }
 };

 Spaceship.defaultProps = {
   speed: 'slow',
   hasRocket: false,
   colors: ['black', 'red']
 }
// OR declare your component first, and then:
// export default Spaceship;

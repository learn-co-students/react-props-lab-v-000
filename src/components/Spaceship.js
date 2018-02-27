import React from 'react';
import ReactDOM from 'react-dom';

export class Spaceship extends React.Component {
  render() {
    return(
      <div>
         <h2>Name: {this.props.name}</h2>
         <h2>Speed: {this.props.speed}</h2>
         <h2>Has Rockets: {this.props.hasRockets}</h2>
         <h3>Colors: {this.props.colors.join(', ')}</h3>
       </div>
   )
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  speed: 'slow',
  colors: ['black', 'red']
};


export default Spaceship;

// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
   render() {

      const { name, speed, hasRockets, colors } = this.props;

      return (
         <div>
            <h1>Spaceship Name: {name}</h1>
            <h3>Specs:</h3>
            <ul>
               <li>Speed: {speed}</li>
               <li>Has Rockets: {hasRockets ? "Yes" : "No"}</li>
               <li>Colors: {colors.join(', ')}</li>
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

export default Spaceship;
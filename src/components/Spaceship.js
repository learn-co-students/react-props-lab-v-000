import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
      return (
       <div className="spaceship">
         <h1>{name}</h1>
         <p>Speed: {speed}</p>
         <p>Has rockets: {hasRockets} ? 'Yes' : 'No' </p>
         <p>Colors: {colors.join(', ')}</p>
       </div>
      );
 }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
  speed: 'slow'
};

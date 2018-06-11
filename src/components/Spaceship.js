// Code The Spaceship Component Here

import React from 'react';

class Spaceship extends React.Component {
  render() {
    let colors = this.props.colors;
    let colorList = colors.map(color => {return <li>{ color }</li>;});
    console.log(colorList); 
    return(
      <div>
        <h1>{ this.props.name }</h1>
        <p>Speed: { this.props.speed }</p>
        <p>Rockets? { this.props.hasRockets } </p>
        <p>Colors:
          <ul>{colorList}</ul>     
        </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red']
}

export default Spaceship;
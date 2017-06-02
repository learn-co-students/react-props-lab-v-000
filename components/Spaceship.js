import React from 'react';

class Spaceship extends React.Component {
  render(){
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Has rockets {this.props.hasRockets}</li>
          <li>Has rockets {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

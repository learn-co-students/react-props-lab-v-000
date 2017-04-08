import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <h2>Name: {this.props.name}</h2>
        <h4>Speed: {this.props.speed}</h4>
        <h4>Rockets: {this.props.hasRockets}</h4>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

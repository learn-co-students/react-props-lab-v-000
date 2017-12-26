// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: { this.props.hasRockets ? 'Yes' : 'No' }</li>
          <li>Colors: {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    );
  }
};

// OR declare your component first, and then ie:
// class Spaceship extends React.Component { info };
// export default Spaceship;

Spaceship.defaultProps = {
  speed:'slow',
  hasRockets: false,
  colors: ['black', 'red'],
};

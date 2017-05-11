import React from 'react';
import ReactDOM from 'react-dom';
 
export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
				<h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>HasRockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors}</p>
     </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

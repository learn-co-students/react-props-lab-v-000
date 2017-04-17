import React from 'react';
//import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component {
  render() {
    return (
      //code here
      <div>
        <h1>name: {this.props.name} </h1>
        <h3>speed: {this.props.speed} </h3>
        <h3>has rockets: {this.props.hasRockets} </h3>
        <h3>colors: {this.props.colors.join(', ')} </h3>
      </div>
      );
  }
}


//default props
Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}
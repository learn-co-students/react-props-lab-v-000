import React from 'react';
import ReactDOM from 'react-dom';

export default class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.speed}</div>
        <div>{this.props.hasRockets}</div>
        <div>{this.props.colors}</div>
      </div>
    );
  }
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

import React from 'react';

export default class Spaceship extends React.Component {
  render(){
    return (
      <div className="spaceship-card">
      <h2>{this.props.name}</h2>
      <p>{this.props.speed}</p>
      <p>{this.props.hasRockets}</p>
      <p>{this.props.colors}</p>
      </div>
    );
  };
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

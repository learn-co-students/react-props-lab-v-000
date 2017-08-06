import React from 'react'

// Code The Spaceship Component Here
export default class Spaceship extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (<div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets? 'Has Rockets' : 'No Rockets'}</p>
        <p>{this.props.colors.join(', ')}</p>
      </div>);
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <h3> {this.props.speed}</h3>
        <h4>{this.props.hasRockets}</h4>
        <small>{this.props.colors.join(", ")}</small>
      </div>


    );
  }
};

  const spaceshipColors = ['black', 'red']
  Spaceship.defaultProps= {
    speed: "slow",
    hasRockets: false,
    colors: spaceshipColors
  };
export default Spaceship;

// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component{

    render(){

      return(
           <div className="space-ship">
             <h3>  {this.props.name}</h3>
             <p> {this.props.speed}</p>
             <div>{this.props.hasRockets}</div>
             {this.props.colors.join(', ')}
           </div>

      )
    }

}

// Setting the default value of speed
Spaceship.defaultProps ={
   speed: "slow",
   hasRockets: false,
   colors: ["black","red"]
};

// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component { 
    
    render() {
        return( 
            <div>
                <div>Name: {this.props.name}</div> 
                <div>speed: {this.props.speed}</div> 
                <div>hasRockets: {this.props.hasRockets}</div> 
                <div>Colors: {this.props.colors}</div> 
            </div>
        )
    };
 };



 Spaceship.defaultProps = {
    speed: 'slow',
    hasRockets: false,
    colors: ['black', 'red'],
  };

// OR declare your component first, and then:
export default Spaceship
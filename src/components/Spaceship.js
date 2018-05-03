// Code The Spaceship Component Here

import React from 'react';

export default class Spaceship extends React.Component { 
    render () { 
        return ( 
            <div className="spaceship"> 
            <p>{this.props.name}</p>
            <p>{this.props.speed}</p>
            <p>{this.props.hasRockets}</p>
            <p>{this.props.colors}</p>
            </div>
        )
    }
}

Spaceship.defaultProps = { 
    speed : 'slow', 
    hasRockets : false, 
    colors: ['black', 'red']
}
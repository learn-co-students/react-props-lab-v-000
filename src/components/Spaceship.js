// Code The Spaceship Component Here
import React from 'react';

export default class Spaceship extends React.Component {
    render() {
        return (
            <div className='Spaceship'>
                <h1>{this.props.name}</h1>
                <ul>Speed: {this.props.speed}</ul>
                <ul>Has Rockets: {this.props.hasRockets}</ul>
                <ul>Colors: {this.props.colors.join(', ')}</ul>
            </div>
        );
    }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};
 

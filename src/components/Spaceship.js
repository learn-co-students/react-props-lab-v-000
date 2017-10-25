// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types'


export default class Spaceship extends React.Component {
  render(){
    return (
      <div className="spaceship">
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <small>Colors: {this.props.colors.join(', ')}</small>
      </div>
    )
  }
};

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.boolean,
  colors: PropTypes.array
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

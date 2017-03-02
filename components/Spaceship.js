import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>Name: {this.props.name}</h2>
        <h4>Speed: {this.props.speed}</h4>
        <h4>Rockets: {this.props.hasRockets}</h4>
        <h4>Color:{this.props.colors.join(', ')}</h4>
      </div>  
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black','red']
};

Spaceship.propTypes = {
  name: React.PropTypes.string,
  speed: React.PropTypes.number,
  hasRockets: React.PropTypes.bool,
  colors: React.PropTypes.arrayOf(React.PropTypes.string),
}

module.exports = Spaceship;
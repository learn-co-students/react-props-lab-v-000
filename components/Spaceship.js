const React = require('react');

class Spaceship extends React.Component {
  render() {
      return (
        <div className='spaceship'>
          <h1>Name: {this.props.name}</h1>
          <h2>Speed: {this.props.speed}</h2>
          <h2>Rockets: {this.props.hasRockets}</h2>
          <small>Colors: {this.props.colors.join(', ')}</small>
        </div>  
      )
  }
}

Spaceship.defaultProps = {
  colors: ['black','red'],
  hasRockets: false
};


module.exports = Spaceship;
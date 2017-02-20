const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>Does it have a rockets? {this.props.hasRockets}</p>
        <p>What is the speed? {this.props.speed}</p>
        <p>In what colors? {this.props.colors.join(', ')}</p>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 23,
  hasRockets: false,
  colors: ['black', 'red']
};

module.exports = Spaceship;
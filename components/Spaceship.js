const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <ul className="spaceship-card">
        <li>Name: {this.props.name}</li>
        <li>Speed: {this.props.speed}</li>
        <li>Colors: {this.props.colors.join(", ")}</li>
        <li>Rockets?:{this.props.hasRockets}</li>
      </ul>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship;

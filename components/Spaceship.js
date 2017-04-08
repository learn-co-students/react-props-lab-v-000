const React = require('react');
const ReactDOM = require('react-dom');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Rockets: {this.props.hasRockets.toString()}</p>
        <p>Colors: {this.props.colors.join(", ")}</p>
        <p>Speed: {this.props.speed}</p>
      </div>
    )
  };
};

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ["black", "red"],
  speed: 0
};

module.exports = Spaceship;

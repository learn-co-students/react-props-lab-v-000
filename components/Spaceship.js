const React = require('react');

class Spaceship extends React.Component {

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>
          Top speed: {this.props.speed}<br />
          Rockets: {this.props.hasRockets}
          Colors: {this.props.colors.join(', ')}
        </p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
};

module.exports = Spaceship

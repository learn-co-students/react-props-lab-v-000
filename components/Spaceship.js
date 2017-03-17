const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div> 
        <h1> Shipname: {this.props.name} </h1>
        <h3> Speed: {this.props.speed} </h3>
        <h3> Colors: {this.props.colors.join(', ')} </h3>
      </div>      
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
  speed: "Really fucking fast bro"
}


module.exports = Spaceship
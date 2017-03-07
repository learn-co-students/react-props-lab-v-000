const React = require('react');

class Spaceship extends React.Component{
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <p>Speed: {this.props.speed}</p>
        <p>Has rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>

    );
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false,
};


module.exports = Spaceship;

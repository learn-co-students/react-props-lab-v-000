const React = require('react')


class SpaceShip extends React.Component {
  render(){
    return (
      <div className="SpaceShip">
        <p> Name: {this.props.name} </p>
        <p> Speed: {this.props.speed}  </p>
        <p> Rockets: {this.props.hasRockets ? 'Yes':'No'}</p>
        <p> Colors: {this.props.colors.join(', ')} </p>
      </div>
    );
  }
}

SpaceShip.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
  speed: '10000mph'
}

module.exports = SpaceShip;
import React, {Component} from 'react';

class Spaceship extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Colors: {this.props.colors.join(", ")}</li>
          {function(){if(this.props.hasRockets){return <li>Has Rockets</li>}}}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;


import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        Ship info:
          Speed: { this.props.speed } <br/>
          Rockets: { this.props.hasRockets ? 'Yes' : 'No'} <br/>
          Colors: { this.props.colors.join(', ') }
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

const colors = [
  'black',
  'red'
]

export default Spaceship;

import React from 'react';

// Code The Spaceship Component Here
export default class Spaceship extends React.Component {

  render() {
    return (
      <div>
      <p>{ this.props.name }</p>
      <p>{ this.props.speed }</p>
      <p>{ this.props.hasRockets }</p>
      <ul>
        { this.props.colors.map((color, index) => <li>{color}</li> )}
      </ul>
      </div>
    )
  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

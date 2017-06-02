import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div class="spaceship">
      <h1>{ this.props.name }</h1>
      <p>{ this.props.speed }</p>
      <p>{ this.props.hasRockets ? 'Yes' : 'No' }</p>
      <p>{ this.props.colors.join(', ') }</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false, 
  colors: ['black', 'red']
}
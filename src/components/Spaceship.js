import React from 'react';

class Spaceship extends React.Component {
  render() {
    console.log(this.props.colors)
    return (
      <div className="spaceship-card">
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

module.exports = Spaceship;// Code The Spaceship Component Here

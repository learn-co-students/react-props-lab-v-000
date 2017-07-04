import React from 'react'



export default class Spaceship extends React.Component {
  render() {
    return <p>{this.props.name} - Speed:{this.props.speed} - Has Rockets? {this.props.hasRockets} - Colors: {this.props.colors} </p>
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red'].join(", ")

}

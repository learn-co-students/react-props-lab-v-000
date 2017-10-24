import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="Spaceship">
        <h1><strong>{this.props.name}</strong></h1>
        <h2>{this.props.speed}</h2>
        <h2>Does this spaceship have rockets? {this.props.hasRockets}</h2>
        <h2>{this.props.colors}</h2>

      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed:"slow",
  hasRockets:false,
  colors:['black', 'red']
}


ReactDOM.render(
  <Spaceship
    name="Spacefair233"
    speed="6800"
    hasRockets="true"
    colors="['blue', 'silver']"/>,
    document.getElementById('global')
)

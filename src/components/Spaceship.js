import React from 'react'
import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Spaceship Name: {this.props.name}</h1>
        <p>Ship Info:</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <ul>
          {this.props.colors}.map(color => <li>color</li>)
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

ReactDOM.render (
  <Spaceship
    name="Millennium Falcon"
  />,
document.getElementById('global')
);

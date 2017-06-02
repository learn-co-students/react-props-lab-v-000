import React from 'react'

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        <h1>Ship: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <div>
          <p>Rockets!!!</p>
        </div>
        <small>colors: {this.props.colors.join(', ')}</small>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;

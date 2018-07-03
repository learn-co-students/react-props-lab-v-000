import React from 'react'

class Spaceship extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <h5>Colors:</h5>
        <ul>
          {this.props.colors.map(function(color){return <li>{color}</li>})}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}


export default Spaceship

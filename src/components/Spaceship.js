// Code The Spaceship Component Here
//name (string)
//speed (number, defaults to slow)
//hasRockets (boolean, defaults to false)
//colors (array of strings, defaults to ['black', 'red'])

import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render(){
    return(
      <div className="spaceship">
        <p>{this.props.name}</p>
        <p>{this.props.speed}</p>
        <p>{this.props.hasRockets}</p>
        <p>{this.props.colors.join(", ")}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

  ReactDOM.render(
    <Spaceship
      name="enterprise"
    />,
    document.getElementById('global')
  )

export default Spaceship;
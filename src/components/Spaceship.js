import React from 'react'


class Spaceship extends React.Component {


  render(){

    return (

      <div>
        <p>Name: {this.props.name}</p>
        <p>Speed:{this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets ? 'Yes' : 'No'}</p>
        <p>Color: {this.props.colors.join(" & ")}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red'],
  speed: 'slow',
  name : 'Idayat Oshobajo'
}
export default Spaceship;

import React from 'react'


class Spaceship extends React.Component {
  render(){
    const {name, speed, hasRockets, colors} = this.props
    return (
      <div className="spaceship"> 
        <div>
          <h1>Spaceship Name: {name} </h1>
          <p> Ship Info: </p>
            <p>Speed: {speed} </p>
            <p> Has Rockets: {hasRockets ? "Yes" : "No"} </p>
            <li> colors: {colors} </li>
        </div>
      </div>

    )
    }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}



export default Spaceship;


// //    1. `name` (string)
// 2. `speed` (number, defaults to `slow`)
// 3. `hasRockets` (boolean, defaults to `false`)
// 4. `colors` (array of strings, defaults to `['black', 'red']`)

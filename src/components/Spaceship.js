import React from 'react'
import ReactDom from 'react-dom'

export default class Spaceship extends React.Component {
 render(){
  return(
   <div className="spaceship-card">
    <h2>Name: {this.props.name}</h2>
    <p>Speed: {this.props.speed}</p>
    <p>has rockets: {this.props.hasRockets}</p>
    <p>colors:{this.props.colors}</p>
   </div>
  )
 }
}

Spaceship.defaultProps = {
 speed: 'slow',
 hasRockets: false,
 colors: ['black', 'red']
}
 
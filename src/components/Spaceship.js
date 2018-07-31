import React,{Component} from "react"
import ReactDOM from "React-dom"

class SpaceShip extends Component{
  render(){
    return(
<div className="spaceShip">
<h2>{this.props.name}</h2>
  <ul>
    <h4>{this.props.speed}</h4>
    <h4>{this.props.hasRockets}</h4>
    <h4>{this.props.colors}</h4>
  </ul>
</div>
    )
  }
}

SpaceShip.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

export default SpaceShip;

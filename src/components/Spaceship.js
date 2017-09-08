// Code The Spaceship Component Here
import React, {Component} from 'react'

export default class Spaceship extends Component {
    render(){
        const {name,speed,hasRockets, colors} = this.props
        return(
            <div>
                <p>Name: {name}</p>
                <p>Speed: {speed}</p>
                <p>hasRockets: {hasRockets ? 'true' : 'false'}</p>
                <p>Colors: {colors.join( ', ' )}</p>
            </div>
        )
    }
}

Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']

}
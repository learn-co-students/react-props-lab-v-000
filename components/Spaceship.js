import React from 'react'
class Spaceship extends React.Component {
	render(){
		return(
			<div>	
			{this.props.name},
			{this.props.speed},
			{this.props.colors},
			{this.props.hasRockets} 
			</div>
		)
	}
}

Spaceship.defaultProps ={
	colors: ['black', 'red'],
	hasRockets: false
}

export default Spaceship 
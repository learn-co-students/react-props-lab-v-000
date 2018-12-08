import React from 'react'

export default class Spaceship extends React.Component {
	render() {
    return (
      	<div className="spaceship">
      		<h1>Star Wars</h1>
        	<img  
          	src='https://media.giphy.com/media/4kL3Q4lIggnGU/giphy.gif'
        	/>    
        	<h2>Name: {this.props.name}</h2>
        	<h2>Speed: {this.props.speed}</h2>
        	<h2>Rockets: {this.props.hasRockets ? 'yes' : 'no'}</h2>
        	<h2>Colors: {this.props.colors.join(', ')}</h2>
      	</div>
    )
  	}
}

Spaceship.defaultProps = {
	speed: 'slow',
	hasRockets: false,
	colors: ['black', 'red']
}

import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
    <div>
     <h1> {this.props.name} </h1>
     <h2> {this.props.speed} </h2>
     <h3> {this.props.hasRockets} </h3>
     <strong> {this.props.colors} </strong>
    </div>
    );
  }
}
 export default Spaceship;
 Spaceship.defaultProps = {
	speed: "medium",
	hasRockets: false,
	colors: ['black', 'red']
}

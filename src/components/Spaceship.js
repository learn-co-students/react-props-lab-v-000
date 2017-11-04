import React from 'react';
import ReactDOM from 'react-dom';
 
class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h3>Name: 
          {this.props.name}
         </h3>
        <p>Speed:
          {this.props.speed}
         </p>
        <p>Has rockets: 
          {"false" || this.props.hasRockets}
         </p>
        <p>Colors:
          {this.props.colors.join(', ')}
         </p>
      </div>
    );   
  };
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  hasRockets: false,
  speed: 'slow'
}


export default Spaceship;

import React from 'react';

export class Spaceship extends React.Component{
  render() {
    return (
        <div class="spaceship">
          <h1> {this.props.name}</h1>
          <p> {this.props.name} has a speed of {this.props.speed} </p>
          <p> Has Rockets: {this.props.hasRockets} </p>
          <ul>
          <h2>{this.props.name} Colors</h2>
            {this.props.colors.map(x => <li>{x}</li>)}
          </ul>


        </div>
    );
  }

};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};

export default Spaceship;

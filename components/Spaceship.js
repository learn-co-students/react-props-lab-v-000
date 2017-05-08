import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets && "Has Rockets"}</h2>
        <ul>
          {this.props.colors.map((e) => `<li>${e}</li>`)}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

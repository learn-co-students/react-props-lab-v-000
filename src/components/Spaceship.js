import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div>
        <h1>Spaceship Name: {name}</h1>
        <p>Ship Info:</p>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <h2>{this.props.name}</h2>
  //       <h3>{this.props.speed}</h3>
  //       <h3>{this.props.hasRockets}</h3>
  //       <h3>{this.props.colors}</h3>
  //     </div>
  //   );
  // }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

export default Spaceship;

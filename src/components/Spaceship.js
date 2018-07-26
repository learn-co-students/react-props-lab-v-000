import React from 'react';

class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;

    return (
      <div>
        <h3>Spaceship Name: {name}</h3>
        <p>Speed: {speed}</p>
        <p>Colors:</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    );
  }
}

  Spaceship.defaultProps = {
    speed: "slow",
    hasRockets: false,
    colors: ['black', 'red']
  }


export default Spaceship;

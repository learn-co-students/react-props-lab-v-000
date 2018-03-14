// // Code The Spaceship Component Here
// This component has several props:
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])
//
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors.join(", ")}</p>
      </div>
    );
  }
}

Spaceship.propTypes = {
  name: PropTypes.string,
  speed: PropTypes.number,
  hasRockets: PropTypes.bool,
  colors: PropTypes.arrayOf(PropTypes.string)
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship />,
  document.getElementById('global')
);
